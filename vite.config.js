import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Copy generated images to public folder if they exist
const sourceDir = 'C:\\Users\\Karan Purkait\\.gemini\\antigravity\\brain\\8f0acc7d-c1d8-4fc4-980d-32f54bcbfd71'
const destDir = path.resolve('public')

const filesToCopy = [
  { src: 'service_development_1783802227497.png', dest: 'service_development.png' },
  { src: 'service_ai_automation_1783802236986.png', dest: 'service_ai_automation.png' },
  { src: 'service_cloud_devops_1783802246085.png', dest: 'service_cloud_devops.png' },
  { src: 'service_uiux_design_1783802256546.png', dest: 'service_uiux_design.png' },
  { src: 'service_support_1783802265353.png', dest: 'service_support.png' }
]

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true })
}

filesToCopy.forEach(file => {
  const srcPath = path.join(sourceDir, file.src)
  const destPath = path.join(destDir, file.dest)
  if (fs.existsSync(srcPath)) {
    try {
      fs.copyFileSync(srcPath, destPath)
      console.log(`Successfully copied ${file.src} to ${file.dest}`)
    } catch (err) {
      console.error(`Error copying ${file.src}:`, err)
    }
  } else {
    console.warn(`Source file not found: ${srcPath}`)
  }
})

// Copy Karan Purkait's avatar
const avatarSrc = 'C:\\Users\\Karan Purkait\\.gemini\\antigravity\\brain\\6ffa1a46-bb8d-4546-ac72-c4fce7bde517\\media__1784038609982.jpg'
const avatarDest = path.join(destDir, 'karan_purkait.jpg')
if (fs.existsSync(avatarSrc)) {
  try {
    fs.copyFileSync(avatarSrc, avatarDest)
    console.log('Successfully copied Karan Purkait avatar to public/karan_purkait.jpg')
  } catch (err) {
    console.error('Error copying avatar:', err)
  }
}

// Copy Shuvadeep Mondal's photo
const shuvadeepSrc = 'C:\\Users\\Karan Purkait\\.gemini\\antigravity\\brain\\6ffa1a46-bb8d-4546-ac72-c4fce7bde517\\media__1784037761805.jpg'
const shuvadeepDest = path.join(destDir, 'shuvadeep_mondal.jpg')
if (fs.existsSync(shuvadeepSrc)) {
  try {
    fs.copyFileSync(shuvadeepSrc, shuvadeepDest)
    console.log('Successfully copied Shuvadeep Mondal photo to public/shuvadeep_mondal.jpg')
  } catch (err) {
    console.error('Error copying Shuvadeep photo:', err)
  }
}

// Copy Puskar Roy's photo
const puskarSrc = 'C:\\Users\\Karan Purkait\\.gemini\\antigravity\\brain\\6ffa1a46-bb8d-4546-ac72-c4fce7bde517\\media__1784039373887.jpg'
const puskarDest = path.join(destDir, 'puskar_roy.jpg')
if (fs.existsSync(puskarSrc)) {
  try {
    fs.copyFileSync(puskarSrc, puskarDest)
    console.log('Successfully copied Puskar Roy photo to public/puskar_roy.jpg')
  } catch (err) {
    console.error('Error copying Puskar photo:', err)
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
