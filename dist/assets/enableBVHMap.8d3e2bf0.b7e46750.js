import{e as T,l as U}from"./useBVHMap.89d4dfff.54583fe0.js";import{E as V,x as W,c as B,L as C,s as A,d as R,R as $,g as k,m as H,k as I,T as J,C as b,$ as F}from"./index.20ecfab8.js";const v=new F;class S extends H{get isMesh(){return!this.displayEdges}get isLineSegments(){return this.displayEdges}get isLine(){return this.displayEdges}constructor(t,e,s=10,i=0){super(),this.material=e,this.geometry=new I,this.name="MeshBVHRootVisualizer",this.depth=s,this.displayParents=!1,this.mesh=t,this.displayEdges=!0,this._group=i}raycast(){}update(){const t=this.geometry,e=this.mesh.geometry.boundsTree,s=this._group;if(t.dispose(),this.visible=!1,e){const i=this.depth-1,r=this.displayParents;let a=0;e.traverse((o,l)=>{if(o===i||l)return a++,!0;r&&a++},s);let c=0;const d=new Float32Array(8*3*a);e.traverse((o,l,y)=>{const h=o===i||l;if(h||r){J(0,y,v);const{min:m,max:u}=v;for(let f=-1;f<=1;f+=2){const z=f<0?m.x:u.x;for(let M=-1;M<=1;M+=2){const P=M<0?m.y:u.y;for(let w=-1;w<=1;w+=2){const L=w<0?m.z:u.z;d[c+0]=z,d[c+1]=P,d[c+2]=L,c+=3}}}return h}},s);let g,n;this.displayEdges?n=new Uint8Array([0,4,1,5,2,6,3,7,0,2,1,3,4,6,5,7,0,1,2,3,4,5,6,7]):n=new Uint8Array([0,1,2,2,1,3,4,6,5,6,7,5,1,4,5,0,4,1,2,3,6,3,7,6,0,2,4,2,6,4,1,5,3,3,5,7]),d.length>65535?g=new Uint32Array(n.length*a):g=new Uint16Array(n.length*a);const _=n.length;for(let o=0;o<a;o++){const l=o*8,y=o*_;for(let h=0;h<_;h++)g[y+h]=l+n[h]}t.setIndex(new b(g,1,!1)),t.setAttribute("position",new b(d,3,!1)),this.visible=!0}}}class E extends R{get color(){return this.edgeMaterial.color}get opacity(){return this.edgeMaterial.opacity}set opacity(t){this.edgeMaterial.opacity=t,this.meshMaterial.opacity=t}constructor(t,e=10){super(),this.name="MeshBVHVisualizer",this.depth=e,this.mesh=t,this.displayParents=!1,this.displayEdges=!0,this._roots=[];const s=new $({color:65416,transparent:!0,opacity:.3,depthWrite:!1}),i=new k({color:65416,transparent:!0,opacity:.3,depthWrite:!1});i.color=s.color,this.edgeMaterial=s,this.meshMaterial=i,this.update()}update(){const t=this.mesh.geometry.boundsTree,e=t?t._roots.length:0;for(;this._roots.length>e;){const s=this._roots.pop();s.geometry.dispose(),this.remove(s)}for(let s=0;s<e;s++){if(s>=this._roots.length){const r=new S(this.mesh,this.edgeMaterial,this.depth,s);this.add(r),this._roots.push(r)}const i=this._roots[s];i.depth=this.depth,i.mesh=this.mesh,i.displayParents=this.displayParents,i.displayEdges=this.displayEdges,i.material=this.displayEdges?this.edgeMaterial:this.meshMaterial,i.update()}}updateMatrixWorld(...t){this.position.copy(this.mesh.position),this.rotation.copy(this.mesh.rotation),this.scale.copy(this.mesh.scale),super.updateMatrixWorld(...t)}copy(t){this.depth=t.depth,this.mesh=t.mesh}clone(){return new E(this.mesh,this.depth)}dispose(){this.edgeMaterial.dispose(),this.meshMaterial.dispose();const t=this.children;for(let e=0,s=t.length;e<s;e++)t[e].geometry.dispose()}}const x=new Map;async function q(p,t){if(p.done)return;let e,s;if("src"in this&&this.src&&x.has(this.src)?[e,s]=x.get(this.src):([e,s]=await V(this),"src"in this&&this.src&&x.set(this.src,[e,s])),!W.has(this)){for(const i of e)T(i);if(p.then(()=>{for(const i of e)U(i)}),t)for(const i of s){const r=new E(new B(i,C),20);A.add(r),p.then(()=>A.remove(r))}}}export{q as default};
