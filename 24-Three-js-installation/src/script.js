import * as THREE from "three";

const canvasContainer = document.querySelector("#canvasContainer");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.01,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

canvasContainer.appendChild(renderer.domElement);

const geometry = new THREE.TorusKnotGeometry(0.7, 0.1, 100, 16);
const material = new THREE.MeshBasicMaterial({ color: 0x7caaa0 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 3;

function animate() {
  renderer.render(scene, camera);
  cube.rotation.x += 0.02;
  cube.rotation.y += 0.01;
}
renderer.setAnimationLoop(animate);
