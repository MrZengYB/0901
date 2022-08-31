import { Model, Skybox, ThirdPersonCamera, useKeyboard, useLoop, World } from "lingo3d-react"
import { createRef, useRef } from "react"
import './App.css'
function App() {
// useKeyboard用于监控当前按键
const key = useKeyboard()  
console.log(key); 
const characterRef = createRef() 
//声明motion，用于表示当前角色应该对应的动画，默认为站立idle  
let motion = "idle";
// 前 
if (key === "w") { motion = "walking"} 
// 后
if (key === "s") {motion = "walkingBackwards"}
// 按下w和e时，开始跑
if (key === "w e") {motion = "running"}
// useLoop 帧循环勾子  
useLoop(() => {characterRef.current.moveForward(-4)}, key === "w"); 
useLoop(() => {characterRef.current.moveForward(1.8)}, key === "s");
useLoop(() => {characterRef.current.moveForward(-10)}, key === "w e");
return (
<World>
<ThirdPersonCamera active mouseControl>
<Model
ref={characterRef}  
src="idle.fbx" physics="character" 
animations={{ idle: "idle.fbx", walking: "walking.fbx",walkingBackwards: "walkingBackwards.fbx",running: "running.fbx"}}
animation={motion} scale={1}/>
</ThirdPersonCamera>
<Model src="scene.glb" scale={40} physics="map"/>
<Skybox texture="skybox.jpeg" />

</World >
)
}
export default App