import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  coreFragment,
  coreVertex,
  glowFragment,
  glowVertex,
  particleFragment,
  particleVertex,
} from '../three/shaders';
import { useMediaQuery } from './ui';

const ION = new THREE.Color('#6EE7F5');
const VIOLET = new THREE.Color('#8B6CFF');
const ICE = new THREE.Color('#EAF7FF');

function makeShell(count: number, radius: number) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const scales = new Float32Array(count);
  const golden = Math.PI * (3 - Math.sqrt(5));
  const c = new THREE.Color();

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    const jitter = 1 + (Math.random() - 0.5) * 0.07;
    positions[i * 3] = Math.cos(theta) * r * radius * jitter;
    positions[i * 3 + 1] = y * radius * jitter;
    positions[i * 3 + 2] = Math.sin(theta) * r * radius * jitter;

    c.copy(VIOLET).lerp(ION, Math.random() * 0.85 + (y + 1) * 0.08);
    if (Math.random() > 0.88) c.lerp(ICE, 0.75);
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
    scales[i] = 0.4 + Math.random() * 1.15;
  }
  return { positions, colors, scales };
}

function ParticleShell({
  count,
  radius,
  size,
  opacity,
  speed,
}: {
  count: number;
  radius: number;
  size: number;
  opacity: number;
  speed: number;
}) {
  const ref = useRef<THREE.Points>(null);
  const { positions, colors, scales } = useMemo(() => makeShell(count, radius), [count, radius]);
  const uniforms = useMemo(
    () => ({
      uSize: { value: size },
      uPixelRatio: { value: 1 },
      uOpacity: { value: opacity },
    }),
    [size, opacity],
  );

  useFrame((state, delta) => {
    uniforms.uPixelRatio.value = state.gl.getPixelRatio();
    if (ref.current) ref.current.rotation.y += delta * speed;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-aColor" count={count} array={colors} itemSize={3} />
        <bufferAttribute attach="attributes-aScale" count={count} array={scales} itemSize={1} />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={particleVertex}
        fragmentShader={particleFragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function DustField({ count, reduced }: { count: number; reduced: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const { positions, colors, scales } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const sc = new Float32Array(count);
    const c = new THREE.Color();
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = 2.6 + Math.pow(Math.random(), 1.7) * 3.4;
      pos[i * 3] = Math.sin(phi) * Math.cos(theta) * r;
      pos[i * 3 + 1] = Math.cos(phi) * r * 0.75;
      pos[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * r;
      c.copy(ION).lerp(VIOLET, Math.random());
      c.multiplyScalar(0.55 + Math.random() * 0.5);
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
      sc[i] = 0.25 + Math.random() * 0.7;
    }
    return { positions: pos, colors: col, scales: sc };
  }, [count]);

  const uniforms = useMemo(
    () => ({
      uSize: { value: 90 },
      uPixelRatio: { value: 1 },
      uOpacity: { value: 0.55 },
    }),
    [],
  );

  useFrame((state, delta) => {
    uniforms.uPixelRatio.value = state.gl.getPixelRatio();
    if (ref.current && !reduced) {
      ref.current.rotation.y -= delta * 0.008;
      ref.current.rotation.x += delta * 0.003;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-aColor" count={count} array={colors} itemSize={3} />
        <bufferAttribute attach="attributes-aScale" count={count} array={scales} itemSize={1} />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={particleVertex}
        fragmentShader={particleFragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function EnergyCore({ reduced }: { reduced: boolean }) {
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAmp: { value: 0.06 },
      uColorA: { value: ION.clone() },
      uColorB: { value: VIOLET.clone() },
    }),
    [],
  );

  useFrame((state) => {
    uniforms.uTime.value = reduced ? 0 : state.clock.elapsedTime;
  });

  return (
    <group>
      <mesh scale={1.47}>
        <icosahedronGeometry args={[1, 5]} />
        <shaderMaterial
          vertexShader={coreVertex}
          fragmentShader={coreFragment}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh scale={1.43}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial color="#04050a" />
      </mesh>
      <mesh scale={1.58}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial
          color="#6EE7F5"
          wireframe
          transparent
          opacity={0.055}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function Halo() {
  const uniforms = useMemo(
    () => ({
      uColorA: { value: VIOLET.clone() },
      uColorB: { value: ION.clone() },
      uOpacity: { value: 0.42 },
    }),
    [],
  );
  return (
    <mesh position={[0, 0, -2.6]}>
      <planeGeometry args={[12, 12]} />
      <shaderMaterial
        vertexShader={glowVertex}
        fragmentShader={glowFragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

function OrbitRings({ reduced }: { reduced: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current && !reduced) ref.current.rotation.z += delta * 0.04;
  });
  return (
    <group ref={ref}>
      <mesh rotation={[1.28, 0.18, 0.34]}>
        <torusGeometry args={[2.6, 0.0045, 6, 260]} />
        <meshBasicMaterial color="#6EE7F5" transparent opacity={0.32} depthWrite={false} />
      </mesh>
      <mesh rotation={[1.52, -0.34, -0.62]}>
        <torusGeometry args={[2.98, 0.0035, 6, 260]} />
        <meshBasicMaterial color="#A78BFA" transparent opacity={0.24} depthWrite={false} />
      </mesh>
      <mesh rotation={[1.1, 0.9, 0.1]}>
        <torusGeometry args={[3.35, 0.0028, 6, 260]} />
        <meshBasicMaterial color="#8EA7C8" transparent opacity={0.14} depthWrite={false} />
      </mesh>
    </group>
  );
}

function Satellite({
  radius,
  speed,
  offset,
  color,
  size,
  reduced,
}: {
  radius: number;
  speed: number;
  offset: number;
  color: string;
  size: number;
  reduced: boolean;
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = (reduced ? 0.8 : clock.elapsedTime) * speed + offset;
    ref.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t * 1.3) * radius * 0.32,
      Math.sin(t) * radius,
    );
  });
  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[size, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh scale={3}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.1}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

function Starfield() {
  const { size } = useThree();
  const count = size.width < 760 ? 420 : 760;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 22;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = -3 - Math.random() * 7;
    }
    return arr;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.032}
        color="#AFC4E4"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function SceneContent({ reduced }: { reduced: boolean }) {
  const { size } = useThree();
  const rig = useRef<THREE.Group>(null);
  const spin = useRef<THREE.Group>(null);

  const mobile = size.width < 760;
  const narrow = size.width < 960;
  const tablet = size.width < 1120;
  const baseY = mobile ? 0.5 : narrow ? 0.2 : 0.02;
  const x = mobile ? 0 : narrow ? 1.3 : tablet ? 1.55 : 2.3;
  const scale = mobile ? 0.58 : narrow ? 0.72 : tablet ? 0.85 : 1;
  const shellCount = mobile ? 1700 : 2600;
  const dustCount = mobile ? 420 : 760;

  useFrame((state, delta) => {
    const group = rig.current;
    if (!group) return;
    const px = state.pointer.x;
    const py = state.pointer.y;
    if (!reduced) {
      group.rotation.x += (py * 0.15 - group.rotation.x) * 0.045;
      group.rotation.y += (px * 0.28 - group.rotation.y) * 0.045;
      const floatY = baseY + Math.sin(state.clock.elapsedTime * 0.42) * 0.07;
      group.position.y += (floatY - group.position.y) * 0.05;
      if (spin.current) {
        spin.current.rotation.y += delta * 0.05;
        spin.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.11) * 0.14;
      }
    }
  });

  return (
    <>
      <Starfield />
      <Halo />
      <group ref={rig} position={[x, baseY, 0]} scale={scale}>
        <group ref={spin}>
          <EnergyCore reduced={reduced} />
        </group>
        <ParticleShell count={shellCount} radius={2.04} size={150} opacity={0.92} speed={0.03} />
        <DustField count={dustCount} reduced={reduced} />
        <OrbitRings reduced={reduced} />
        <Satellite radius={2.6} speed={0.22} offset={0.4} color="#9DF3FF" size={0.038} reduced={reduced} />
        <Satellite radius={2.98} speed={-0.16} offset={2.2} color="#C4B5FD" size={0.03} reduced={reduced} />
        <Satellite radius={3.35} speed={0.12} offset={4.1} color="#8BA3C7" size={0.024} reduced={reduced} />
      </group>
    </>
  );
}

export default function HeroScene({ active }: { active: boolean }) {
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [webgl, setWebgl] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      setWebgl(!!(canvas.getContext('webgl2') || canvas.getContext('webgl')));
    } catch {
      setWebgl(false);
    }
  }, []);

  if (!webgl) return <div className="hero__fallback" aria-hidden />;

  return (
    <Canvas
      frameloop={active ? 'always' : 'never'}
      camera={{ position: [0, 0, 9.5], fov: 38 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      aria-hidden
    >
      <SceneContent reduced={reduced} />
    </Canvas>
  );
}
