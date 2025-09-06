'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'

function StarField({
  count = 900,
  hovered = false,
  mouse = { x: 0, y: 0 }
}: {
  count?: number
  hovered?: boolean
  mouse: { x: number; y: number }
}) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      // scatter points in a sphere-ish volume
      arr[i] = THREE.MathUtils.randFloatSpread(10)
    }
    return arr
  }, [count])

  const group = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (!group.current) return

    // target rotations + parallax based on mouse (normalized -1..1)
    const targetRotX = Math.sin(t / 8) * 0.05 + mouse.y * 0.2
    const targetRotY = Math.cos(t / 10) * 0.05 + mouse.x * 0.2
    const targetPosX = mouse.x * 0.6
    const targetPosY = -mouse.y * 0.6

    // ease toward targets
    group.current.rotation.x += (targetRotX - group.current.rotation.x) * 0.08
    group.current.rotation.y += (targetRotY - group.current.rotation.y) * 0.08
    group.current.position.x += (targetPosX - group.current.position.x) * 0.06
    group.current.position.y += (targetPosY - group.current.position.y) * 0.06

    const s = hovered ? 1.08 : 1
    group.current.scale.x += (s - group.current.scale.x) * 0.08
    group.current.scale.y = group.current.scale.x
    group.current.scale.z = group.current.scale.x
  })

  const size = hovered ? 0.045 : 0.032 // bigger overall + extra when hovered

  return (
    <group ref={group}>
      <Points positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#ffffff"
          size={size}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default function Hero3D() {
  const [hovered, setHovered] = useState(false)
  const mouse = useRef({ x: 0, y: 0 })

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width * 2 - 1
    const ny = (e.clientY - rect.top) / rect.height * 2 - 1
    mouse.current.x = nx
    mouse.current.y = ny
  }

  return (
    <div
      className="absolute inset-0 z-0 opacity-55"  /* more visible */
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onPointerMove={onMove}
    >
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 8], fov: 60 }} gl={{ antialias: false, alpha: true }}>
        <StarField count={900} hovered={hovered} mouse={mouse.current} />
      </Canvas>
    </div>
  )
}
