import{s as y,a as m,b as d}from"./index.20ecfab8.js";import{x as l}from"./PhysicsUpdate.80a0de04.524d9a70.js";const c=[1,2,4,8,16,32],f=[0,1,2,3,4,5];async function F(s){var a,n;if(s.done)return;y.attach(this.outerObject3d);const{slipperyMaterial:h,defaultMaterial:p,world:r,Body:u,Vec3:e}=await m();if(s.done)return;const t=this.cannonBody=new u({mass:(a=this._mass)!=null?a:1,material:this._slippery?h:p,collisionFilterGroup:c[(n=this._physicsGroup)!=null?n:0],collisionFilterMask:f.filter(i=>{var o;return!((o=this._ignorePhysicsGroups)!=null&&o.includes(i))}).map(i=>c[i]).reduce((i,o)=>i+o,0)});await this.physicsShape(),!s.done&&(this._physics==="2d"&&(t.angularFactor=new e(0,0,1),t.linearFactor=new e(1,1,0)),this._noTumble&&(t.angularFactor=new e(0,0,0)),t.position.copy(this.outerObject3d.position),t.quaternion.copy(this.outerObject3d.quaternion),this.rotationUpdate=new l,this.positionUpdate=new l,r.addBody(t),d.add(this),s.then(()=>{r.removeBody(t),d.delete(this),this.cannonBody=void 0,this.rotationUpdate=void 0,this.positionUpdate=void 0}))}export{F as default};