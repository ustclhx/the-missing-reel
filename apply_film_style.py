#!/usr/bin/env python3
"""
Apply vintage 8mm film style to images
"""
from PIL import Image, ImageEnhance, ImageFilter
import numpy as np
import sys

def apply_film_style(input_path, output_path):
    """Apply dark, eerie 8mm film aesthetic to an image"""
    
    # Load image
    img = Image.open(input_path)
    img = img.convert('RGB')
    
    # Convert to numpy array for processing
    img_array = np.array(img, dtype=np.float32)
    
    # 1. Desaturate and apply vintage color grading
    # Convert to grayscale-ish with greenish-brown tint
    r, g, b = img_array[:,:,0], img_array[:,:,1], img_array[:,:,2]
    gray = 0.299 * r + 0.587 * g + 0.114 * b
    
    # Apply vintage color cast (greenish-brown)
    img_array[:,:,0] = gray * 0.8 + r * 0.2  # Less red
    img_array[:,:,1] = gray * 0.9 + g * 0.1  # Slightly more green
    img_array[:,:,2] = gray * 0.6 + b * 0.4  # Much less blue
    
    # 2. Darken the image overall
    img_array = img_array * 0.5  # Make it darker
    
    # 3. Add vignetting (dark edges)
    h, w = img_array.shape[:2]
    Y, X = np.ogrid[:h, :w]
    center_y, center_x = h / 2, w / 2
    
    # Create radial gradient
    dist_from_center = np.sqrt((X - center_x)**2 + (Y - center_y)**2)
    max_dist = np.sqrt(center_x**2 + center_y**2)
    vignette = 1 - (dist_from_center / max_dist) ** 1.5
    vignette = np.clip(vignette * 1.2, 0.3, 1.0)  # Strong vignetting
    
    img_array = img_array * vignette[:,:,np.newaxis]
    
    # 4. Add film grain
    noise = np.random.normal(0, 8, img_array.shape)
    img_array = img_array + noise
    
    # 5. Reduce contrast (crushed blacks, faded highlights)
    img_array = np.clip(img_array, 0, 255)
    img_array = (img_array - 127.5) * 0.6 + 127.5
    
    # Clip and convert back to image
    img_array = np.clip(img_array, 0, 255).astype(np.uint8)
    img = Image.fromarray(img_array)
    
    # 6. Apply slight blur for that soft 8mm look
    img = img.filter(ImageFilter.GaussianBlur(radius=0.5))
    
    # 7. Reduce brightness further
    enhancer = ImageEnhance.Brightness(img)
    img = enhancer.enhance(0.7)
    
    # 8. Reduce saturation
    enhancer = ImageEnhance.Color(img)
    img = enhancer.enhance(0.4)
    
    # Save the processed image
    img.save(output_path, quality=85)
    print(f"✓ Processed: {output_path}")

if __name__ == "__main__":
    # Process both images
    apply_film_style(
        "/Users/xindaliu/.gemini/antigravity/brain/e257b9be-c1a6-41f9-8b80-978d6363cffc/uploaded_image_0_1767011196108.jpg",
        "/Users/xindaliu/Downloads/the-missing-reel_-12.12/public/assets/film_00_1.jpg"
    )
    
    apply_film_style(
        "/Users/xindaliu/.gemini/antigravity/brain/e257b9be-c1a6-41f9-8b80-978d6363cffc/uploaded_image_1_1767011196108.jpg",
        "/Users/xindaliu/Downloads/the-missing-reel_-12.12/public/assets/film_00_2.jpg"
    )
    
    print("\n✓ All images processed successfully!")
