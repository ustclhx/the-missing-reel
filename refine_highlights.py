
import re

FILE_PATH = 'constants.ts'

# List of characters to dedup
CHARACTERS = {
    '苹果', '阿山', '阿文', '孟奇', '小树', '老陈', '玲', '老莫', '大白', 
    '陌生人1', '梓荀', '宋阳', '阿昭', '刘斐', '李斐', 'Taylor Soigir'
}

def refine_file():
    with open(FILE_PATH, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    
    in_blog_entries = False
    in_audio_logs = False
    in_content = False
    seen_chars_in_block = set()
    
    # Regex for finding highlights: __Text__
    highlight_pattern = re.compile(r'__([^_]+?)__')

    for i, line in enumerate(lines):
        original_line = line
        
        # detect section
        if 'export const BLOG_ENTRIES' in line:
            in_blog_entries = True
            in_audio_logs = False
        elif 'export const AUDIO_LOGS' in line:
            in_audio_logs = True
            in_blog_entries = False
        elif 'export const' in line:
            # Entering some other section (like FILM_ARCHIVE or INITIAL_ITEMS)
            in_blog_entries = False
            in_audio_logs = False

        # Detect start of content
        if 'content: `' in line:
            in_content = True
            seen_chars_in_block = set()
            
            # --- Rule 1: Remove Cocktail Title Highlights in Blog Entries ---
            if in_blog_entries:
                # We look for `__Title__` at the immediate start of the backtick
                # Case 1: content: `__Title__
                # Case 2: content: `__Title__ ...
                
                # split line at `
                parts = line.split('`', 1)
                if len(parts) > 1:
                    pre_backtick = parts[0] + '`'
                    post_backtick = parts[1]
                    
                    # Check if post_backtick starts with __Something__
                    match_title = re.match(r'\s*__([^_]+)__', post_backtick)
                    if match_title:
                        title_text = match_title.group(1)
                        # Remove the underscores for this specific match
                        # We reconstruct the line
                        # Be careful if title_text might be a character name (unlikely for title)
                        # But wait, Title is NOT text highlights.
                        # We just want to remove the __ around the title.
                        
                        # Replace only the first occurrence of __Title__ in post_backtick
                        new_post_backtick = post_backtick.replace(f'__{title_text}__', title_text, 1)
                        line = pre_backtick + new_post_backtick

        # Only process content lines or lines inside content
        if in_content:
            
            # Helper to replace characters based on seen set
            def replace_char(match):
                text = match.group(1)
                full_match = match.group(0)
                
                if text in CHARACTERS:
                    if text in seen_chars_in_block:
                        # Already seen: remove highlights
                        return text
                    else:
                        # New char: mark seen, keep highlights
                        seen_chars_in_block.add(text)
                        return full_match
                
                # If not a character (e.g. Cocktail in body, Time), keep highlight
                return full_match

            # Apply replacement to the line
            line = highlight_pattern.sub(replace_char, line)
            
            # Check for end of content block
            # Logic: If detected a backtick ` that is NOT part of content: `
            # Note: `content: '`...`'` is valid in JS/TS
            # We assume standard formatting where ` is the delimiter.
            
            # Helper to check if block ends on this line
            # It ends if there is a ` that is NOT the opening backtick.
            
            # Find all backticks
            backticks = [m.start() for m in re.finditer(r'`', line)]
            
            is_start_line = 'content: `' in original_line # use original just to be safe on logic
            
            # If start line, we expect 1 backtick (start). If 2, it opens and closes.
            if is_start_line:
                if len(backticks) >= 2:
                    in_content = False
            else:
                # Not start line. Any backtick implies end (usually).
                if len(backticks) > 0:
                    in_content = False
                    
        new_lines.append(line)

    # Write back
    with open(FILE_PATH, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    
    print("Successfully suppressed highlights.")

if __name__ == '__main__':
    refine_file()
