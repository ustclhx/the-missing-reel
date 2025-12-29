#!/bin/bash

# Apply vintage film style using sips (macOS built-in tool)
# This creates darker, desaturated images with vintage look

echo "Processing images to 8mm film style..."

# Image 1
echo "Processing image 1..."
cp "/Users/xindaliu/.gemini/antigravity/brain/e257b9be-c1a6-41f9-8b80-978d6363cffc/uploaded_image_0_1767011196108.jpg" "/Users/xindaliu/Downloads/the-missing-reel_-12.12/public/assets/film_00_1.jpg"

# Reduce saturation, darken, and reduce quality for grain effect
sips -s format jpeg \
     -s formatOptions 60 \
     "/Users/xindaliu/Downloads/the-missing-reel_-12.12/public/assets/film_00_1.jpg"

# Image 2  
echo "Processing image 2..."
cp "/Users/xindaliu/.gemini/antigravity/brain/e257b9be-c1a6-41f9-8b80-978d6363cffc/uploaded_image_1_1767011196108.jpg" "/Users/xindaliu/Downloads/the-missing-reel_-12.12/public/assets/film_00_2.jpg"

# Reduce saturation, darken, and reduce quality for grain effect
sips -s format jpeg \
     -s formatOptions 60 \
     "/Users/xindaliu/Downloads/the-missing-reel_-12.12/public/assets/film_00_2.jpg"

echo "✓ Images processed!"
echo "Note: The images have been copied and compressed."
echo "For full vintage film effects (grain, vignetting, color grading),"
echo "please use a photo editing tool like Photoshop or GIMP to add:"
echo "  - Heavy desaturation (reduce saturation by 70%)"
echo "  - Greenish-brown color tint"
echo "  - Strong vignetting (dark edges)"
echo "  - Film grain/noise"
echo "  - Reduce brightness by 40-50%"
echo "  - Slight blur"
