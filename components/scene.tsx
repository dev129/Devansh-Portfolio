'use client'
import {Canvas,useThree} from '@react-three/fiber'
import { Suspense } from 'react'
import Model from './ThreeScene'

export default function scene() {
    return (
        <Canvas>
<directionalLight position={[-5, -5, 5]} intensity={4} />
<Suspense fallback={null}>
    <Model />
    </Suspense>
</Canvas>
)
}