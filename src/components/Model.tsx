import { useGLTF } from '@react-three/drei'

interface ModelProps {
  path: string;
  [key: string]: any;
}

export function Model({ path, ...props }: ModelProps) {
  const { scene } = useGLTF(path)
  return <primitive object={scene.clone()} {...props} />
}
