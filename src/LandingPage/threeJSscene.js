import React from 'react'
import { useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame } from '@react-three/fiber'



const threeJSscene = () => {
  return (
    <div>
      <canvas class="ThreeJSCanvas"></canvas>
    </div>
  )
}

export default threeJSscene


