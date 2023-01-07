var obj;
        import { GLTFLoader } from './three/GLTFLoader.js';

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
        var renderer = new THREE.WebGLRenderer({alpha: true,antialias: true});
        let canvas = document.querySelector('canvas')
        renderer.setSize( window.innerWidth, window.innerHeight );
        let can = document.querySelector('.hero_right')

        renderer.domElement.classList.add('logo3D')
        document.body.appendChild( renderer.domElement );
        let canva = document.querySelector('.logo3D');
        var loader = new GLTFLoader();
        loader.load( './assets/three/mod.gltf', function ( gltf ) {
            obj = gltf.scene;
            scene.add( gltf.scene );
        }, undefined, function ( error ) {
            console.error( error );
        } );
        // scene.background = new THREE.Color(0xFAFAFD);
        // const pointLight = new THREE.PointLight(0x000000);
        // pointLight.position.set(5, 5, 5);

        // // const ambientLight = new THREE.AmbientLight(0xffffff);
        // scene.add(pointLight);

        scene.add( new THREE.AmbientLight( 0x222222 ) );

        const light = new THREE.DirectionalLight( 0xffffff, 1 );
        light.position.set( -2, 0, 10 );
        scene.add( light );

        camera.position.set(0,0,20);

        
        // obj.position.set(0,0,0);
        var height = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
            document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
        height = height - window.innerHeight;
        function moveCamera() {
            const scroll = document.querySelector('.scroll_inner');
            let per = (scrollY/height)*100;
            scroll.style.width = `${per}%`;
        const t = document.body.getBoundingClientRect().top;
        let hp = document.querySelector('.timer-wrapper').clientHeight;
        if(window.innerHeight < scrollY){
            document.querySelector('.logo3D').style.display = 'none';
        }
        if(window.innerHeight-hp/2 < scrollY){
            document.querySelector('.logo3D').style.zIndex = -10;
            document.querySelector('.logo3D').style.opacity = '0';
            // setTimeout(function(){ document.querySelector('.logo3D').style.display = 'none' }, 1000);
            // document.querySelector('.logo3D').style.display = 'none';
        }
        else{
            document.querySelector('.logo3D').style.display = 'block';
            document.querySelector('.logo3D').style.opacity = '1';
        }
        }

        document.body.onscroll = moveCamera;
        moveCamera();

        function animate() {
            requestAnimationFrame( animate );
            // obj.rotation.y += 0.08;
            let temp = -.5 + scrollY/100;
            if(obj) obj.rotation.y = temp;
            renderer.render( scene, camera );
        }
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        window.addEventListener('resize', onWindowResize, false);
        animate();

