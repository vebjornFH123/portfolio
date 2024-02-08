import React, {Suspense, useEffect, useRef} from "react";
import {useAnimations} from "@react-three/drei";
import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader";
import {useGlobalState} from "../globalState";

import {MeshStandardMaterial} from "three";

export default function Desk({callFunction}) {
	const {setGlobalData} = useGlobalState();
	const group = useRef();

	const {animations, scene} = useLoader(GLTFLoader, "/models/Desk.glb");

	const {actions, names} = useAnimations(animations, group);

	scene.traverse((aObject) => {
		console.log(aObject);
		if (aObject.isMesh) {
			aObject.castShadow = true;
			aObject.receiveShadow = true;
		} else if (aObject.isGroup) {
			aObject.castShadow = true;
		}
	});

	// Access the object by name
	const glass = scene.getObjectByName("Glass");

	if (glass) {
		// Create a new material
		const newMaterial = new MeshStandardMaterial({
			color: 0x00bfff, // Light blue color
			transparent: true,
			opacity: 0.3, // Adjust opacity as needed (0.0 to 1.0)}); // Replace with the desired material settings
			receiveShadow: true,
		});
		// Assign the new material to the object
		glass.material = newMaterial;
	}

	useEffect(() => {
		actions[names[0]].reset().fadeIn(0).play();
	});

	useEffect(() => {
		callFunction(true);
	}, [callFunction]);

	return (
		<group ref={group}>
			<primitive object={scene} position-y={0.2} />
		</group>
	);
}
