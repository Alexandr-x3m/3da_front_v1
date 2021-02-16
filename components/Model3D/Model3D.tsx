import { useRef } from 'react'

const THREE = require('three')
const GLTFLoader  = require('three-gltf-loader')


const Model3D = () => {

    const canvas = useRef()

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, window.innerHeight/ window.innerWidth, 0.1, 1000);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({alph: false, antialis: true});
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(1280, 720);
    renderer.domElement

    const aLight = new THREE.AmbientLight(0x404040, 1.2);
    scene.add(aLight); 

    const pLight = new THREE.PointLight(0xFFFFFF, 1.2);
    pLight.position.set(0, -3, 7);
    scene.add(pLight);

    const loader = new GLTFLoader();
    let obj = null


    loader.load('/scene.gltf', (gltf) => {
        obj = gltf
        obj.scene.scale(0.5, 0.52, 0.5)

        scene.add(obj.scene)
    })




    return (
        <canvas ref={canvas} style={{width: '100vw', height: '100vh'}}>

        </canvas>
    )
}

export default Model3D;