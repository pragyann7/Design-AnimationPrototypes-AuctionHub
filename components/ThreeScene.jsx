import React, { useRef, useLayoutEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';
import { OrbitControls } from 'three-stdlib';

const ThreeScene = () => {
    const mountRef = useRef(null);
    const mixerRef = useRef(null);
    const actionsRef = useRef({});
    const [activeAction, setActiveAction] = useState(null);

    useLayoutEffect(() => {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x111111);

        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.set(0, 1, 3);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        mountRef.current.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 7.5);
        scene.add(ambientLight, directionalLight);

        const loader = new GLTFLoader();
        loader.load(
            '/models/myModel.glb',
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(1, 1, 1);
                scene.add(model);

                const mixer = new THREE.AnimationMixer(model);
                mixerRef.current = mixer;

                // Create actions for each animation clip
                gltf.animations.forEach((clip) => {
                    const action = mixer.clipAction(clip);
                    actionsRef.current[clip.name] = action;
                });

                // Play first animation by default
                const firstAction = gltf.animations[0] && actionsRef.current[gltf.animations[0].name];
                if (firstAction) {
                    firstAction.play();
                    setActiveAction(gltf.animations[0].name);
                }
            },
            undefined,
            (error) => {
                console.error('Error loading GLB:', error);
            }
        );

        const clock = new THREE.Clock();

        const animate = () => {
            requestAnimationFrame(animate);

            const delta = clock.getDelta();
            if (mixerRef.current) {
                mixerRef.current.update(delta);
            }

            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            mountRef.current.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    // Function to switch animation with smooth crossfade
    const switchAnimation = (newActionName) => {
        if (!actionsRef.current[newActionName] || activeAction === newActionName) return;

        const mixer = mixerRef.current;
        const previousAction = actionsRef.current[activeAction];
        const newAction = actionsRef.current[newActionName];

        newAction.reset().play();
        if (previousAction) {
            previousAction.crossFadeTo(newAction, 0.5, false);
        }
        setActiveAction(newActionName);
    };

    return (
        <>
            <div
                ref={mountRef}
                className="w-full h-[500px] bg-black rounded-lg shadow-lg mb-4"
            />
            <div className="flex space-x-4 justify-center">
                {Object.keys(actionsRef.current).map((name) => (
                    <button
                        key={name}
                        onClick={() => switchAnimation(name)}
                        className={`px-4 py-2 rounded ${activeAction === name ? 'bg-blue-600 text-white' : 'bg-gray-300'
                            }`}
                    >
                        {name}
                    </button>
                ))}
            </div>
        </>
    );
};

export default ThreeScene;
