from PIL import Image
import sys

# Load the image
img = Image.open('/Users/xindaliu/Downloads/the-missing-reel_-12.12/public/assets/film_00_7.jpg')

# Convert to RGB if needed
if img.mode != 'RGB':
    img = img.convert('RGB')

# Get image dimensions
width, height = img.size

# Define border detection threshold (white is typically RGB 240-255)
threshold = 240

# Find the content boundaries by scanning from edges
left = 0
top = 0
right = width
bottom = height

# Scan from left
for x in range(width):
    if any(img.getpixel((x, y))[0] < threshold for y in range(height)):
        left = x
        break

# Scan from top
for y in range(height):
    if any(img.getpixel((x, y))[0] < threshold for x in range(width)):
        top = y
        break

# Scan from right
for x in range(width-1, -1, -1):
    if any(img.getpixel((x, y))[0] < threshold for y in range(height)):
        right = x + 1
        break

# Scan from bottom
for y in range(height-1, -1, -1):
    if any(img.getpixel((x, y))[0] < threshold for x in range(width)):
        bottom = y + 1
        break

# Crop the image
cropped = img.crop((left, top, right, bottom))

# Save the result
cropped.save('/Users/xindaliu/Downloads/the-missing-reel_-12.12/public/assets/film_00_7_temp.jpg', quality=95)
print(f"Cropped from {width}x{height} to {right-left}x{bottom-top}")
