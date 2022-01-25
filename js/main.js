// import 'cssstyle.css'
import * as THREE from 'three'
import React from "react";
import ReactDOM from "react-dom";


// function getExpScoreA(ratingA - ratingB) {
//   return 1.0 / (1 + 10 ** ((ratingB - ratingA) / 400))
// }

// function ratingAdj(rating, expScore, score, k=32) {
//   return rating + k * (score - expScore)
// }

// class Player {
//   constructor(name, rating=1000) {
//     this.name = name
//     this.rating = rating
//     this.games = 0
//     this.wins = 0
//     this.losses = 0
//     this.draws = 0
//   }

//   function match(self, other, result) {
//     self.games += 1
//     other.games += 1

//     expScoreA = getExpScoreA(self.rating, other.rating)
    
//     if (result == self.name) {
//       self.wins += 1
//       other.losses += 1
//       self.rating = ratingAdj(self.rating, expScoreA, 1)
//       other.rating = ratingAdj(other.rating, expScoreA, 0)
//     } else if (result == other.name) {
//       self.losses += 1
//       other.wins += 1
//       self.rating = ratingAdj(self.rating, expScoreA, 0)
//       other.rating = ratingAdj(other.rating, expScoreA, 1)
//     } else if (result == "Draw") {
//       self.draws += 1
//       other.draws += 1
//       // add some code for draws here later 
//     } else {
//       console.log('error, wrong name')
//     }

    
//     }
//   }

//   function getRating() {
//     //get rating
//     return rating
//   }
// }
let camera, scene, renderer;
let geometry, material, mesh;

init();

function init() {

camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 1;

scene = new THREE.Scene();

geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
material = new THREE.MeshNormalMaterial();

mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

renderer = new THREE.WebGLRenderer( { 
  antialias: true,
 } );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animation );
document.body.appendChild( renderer.domElement );



}

function animation( time ) {

mesh.rotation.x = time / 2000;
mesh.rotation.y = time / 1000;

renderer.render( scene, camera );

}


// ReactDom.render(<h1>Hello world!</h1>, document.getElementById("hello"));