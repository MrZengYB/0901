import{bb as k,ai as E,y as a,_ as y,ah as H,bc as I,ar as w,aC as O,aO as P,bd as b,be as L,bf as N,bg as j,bh as q,bi as M,bj as T,bk as c,bl as D,bm as _,c as G,bn as K,aR as V,ag as Z,bo as Y,aK as U,k as $,C as S}from"./index.f735b5c1.js";/**
 * postprocessing v6.28.5 build Wed Aug 03 2022
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2022 Raoul van Rüschen
 * @license Zlib
 */var X="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",R={VERY_SMALL:0,SMALL:1,MEDIUM:2,LARGE:3,VERY_LARGE:4,HUGE:5},J=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <encodings_fragment>
}`,Q="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",ee=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],te=class extends T{constructor(e=new w){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new c(null),texelSize:new c(new w),scale:new c(1),kernel:new c(0)},blending:D,depthWrite:!1,depthTest:!1,fragmentShader:J,vertexShader:Q}),this.toneMapped=!1,this.setTexelSize(e.x,e.y),this.kernelSize=R.MEDIUM}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.inputBuffer=e}get kernelSequence(){return ee[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(e){this.uniforms.scale.value=e}getScale(){return this.uniforms.scale.value}setScale(e){this.uniforms.scale.value=e}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(e){this.uniforms.kernel.value=e}setKernel(e){this.kernel=e}setTexelSize(e,t){this.uniforms.texelSize.value.set(e,t,e*.5,t*.5)}setSize(e,t){const i=1/e,r=1/t;this.uniforms.texelSize.value.set(i,r,i*.5,r*.5)}},ie=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <encodings_fragment>
#include <dithering_fragment>
}`,re=class extends T{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new c(null),opacity:new c(1)},blending:D,depthWrite:!1,depthTest:!1,fragmentShader:ie,vertexShader:X}),this.toneMapped=!1}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.uniforms.inputBuffer.value=e}getOpacity(e){return this.uniforms.opacity.value}setOpacity(e){this.uniforms.opacity.value=e}},se=new k,o=null;function ae(){if(o===null){const e=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),t=new Float32Array([0,0,2,0,0,2]);o=new $,o.setAttribute!==void 0?(o.setAttribute("position",new S(e,3)),o.setAttribute("uv",new S(t,2))):(o.addAttribute("position",new S(e,3)),o.addAttribute("uv",new S(t,2)))}return o}var F=class{constructor(e="Pass",t=new _,i=se){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new G(ae(),e),t.frustumCulled=!1,this.scene===null&&(this.scene=new _),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=K){}render(e,t,i,r,s){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof b||t instanceof V||t instanceof Z||t instanceof F)&&this[e].dispose()}}};new E;var l=-1,x=class extends Y{constructor(e,t=l,i=l,r=1){super(),this.resizable=e,this.baseSize=new U(1,1),this.preferredSize=new U(t,i),this.target=this.preferredSize,this.s=r,this.effectiveSize=new U,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const e=this.baseSize,t=this.preferredSize,i=this.effectiveSize,r=this.scale;t.width!==l?i.width=t.width:t.height!==l?i.width=Math.round(t.height*(e.width/Math.max(e.height,1))):i.width=Math.round(e.width*r),t.height!==l?i.height=t.height:t.width!==l?i.height=Math.round(t.width/Math.max(e.width/Math.max(e.height,1),1)):i.height=Math.round(e.height*r)}get width(){return this.effectiveSize.width}set width(e){this.preferredWidth=e}get height(){return this.effectiveSize.height}set height(e){this.preferredHeight=e}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(e){this.s!==e&&(this.s=e,this.preferredSize.setScalar(l),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(e){this.scale=e}get baseWidth(){return this.baseSize.width}set baseWidth(e){this.baseSize.width!==e&&(this.baseSize.width=e,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(e){this.baseWidth=e}get baseHeight(){return this.baseSize.height}set baseHeight(e){this.baseSize.height!==e&&(this.baseSize.height=e,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(e){this.baseHeight=e}setBaseSize(e,t){(this.baseSize.width!==e||this.baseSize.height!==t)&&(this.baseSize.set(e,t),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(e){this.preferredSize.width!==e&&(this.preferredSize.width=e,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(e){this.preferredWidth=e}get preferredHeight(){return this.preferredSize.height}set preferredHeight(e){this.preferredSize.height!==e&&(this.preferredSize.height=e,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(e){this.preferredHeight=e}setPreferredSize(e,t){(this.preferredSize.width!==e||this.preferredSize.height!==t)&&(this.preferredSize.set(e,t),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(e){this.s=e.scale,this.baseSize.set(e.getBaseWidth(),e.getBaseHeight()),this.preferredSize.set(e.getPreferredWidth(),e.getPreferredHeight()),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return l}},ne=class extends F{constructor({kernelSize:e=R.MEDIUM,resolutionScale:t=.5,width:i=x.AUTO_SIZE,height:r=x.AUTO_SIZE,resolutionX:s=i,resolutionY:n=r}={}){super("KawaseBlurPass"),this.renderTargetA=new b(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const h=this.resolution=new x(this,s,n,t);h.addEventListener("change",m=>this.setSize(h.baseWidth,h.baseHeight)),this.blurMaterial=new te,this.copyMaterial=new re}getResolution(){return this.resolution}get dithering(){return this.copyMaterial.dithering}set dithering(e){this.copyMaterial.dithering=e}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(e){this.blurMaterial.kernelSize=e}get width(){return this.resolution.width}set width(e){this.resolution.preferredWidth=e}get height(){return this.resolution.height}set height(e){this.resolution.preferredHeight=e}get scale(){return this.blurMaterial.scale}set scale(e){this.blurMaterial.scale=e}getScale(){return this.blurMaterial.scale}setScale(e){this.blurMaterial.scale=e}getKernelSize(){return this.kernelSize}setKernelSize(e){this.kernelSize=e}getResolutionScale(){return this.resolution.scale}setResolutionScale(e){this.resolution.scale=e}render(e,t,i,r,s){const n=this.scene,h=this.camera,m=this.renderTargetA,p=this.renderTargetB,u=this.blurMaterial,g=u.kernelSequence;let d=t;this.fullscreenMaterial=u;for(let f=0,z=g.length;f<z;++f){const v=(f&1)===0?m:p;u.kernel=g[f],u.inputBuffer=d.texture,e.setRenderTarget(v),e.render(n,h),d=v}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=d.texture,e.setRenderTarget(this.renderToScreen?null:i),e.render(n,h)}setSize(e,t){const i=this.resolution;i.setBaseSize(e,t);const r=i.width,s=i.height;this.renderTargetA.setSize(r,s),this.renderTargetB.setSize(r,s),this.blurMaterial.setSize(e,t)}initialize(e,t,i){i!==void 0&&(this.renderTargetA.texture.type=i,this.renderTargetB.texture.type=i,i!==q?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):e.outputEncoding===M&&(this.renderTargetA.texture.encoding=M,this.renderTargetB.texture.encoding=M))}static get AUTO_SIZE(){return x.AUTO_SIZE}};new a;new y;new E;new a;new a;class oe extends H{constructor(t,i,r,s,{mixBlur:n=0,mixStrength:h=1,resolution:m=256,blur:p=[0,0],minDepthThreshold:u=.9,maxDepthThreshold:g=1,depthScale:d=0,depthToBlurRatioBias:f=.25,mirror:z=0,distortion:v=1,mixContrast:C=1,distortionMap:B,reflectorOffset:A=0,planeNormal:W=new a(0,0,1)}={}){super(),this.gl=t,this.camera=i,this.scene=r,this.parent=s,this.hasBlur=p[0]+p[1]>0,this.reflectorPlane=new I,this.normal=new a,this.reflectorWorldPosition=new a,this.cameraWorldPosition=new a,this.rotationMatrix=new y,this.lookAtPosition=new a(0,-1,0),this.clipPlane=new w,this.view=new a,this.target=new a,this.q=new w,this.textureMatrix=new y,this.virtualCamera=new O,this.reflectorOffset=A,this.planeNormal=W,this.setupBuffers(m,p),this.reflectorProps={mirror:z,textureMatrix:this.textureMatrix,mixBlur:n,tDiffuse:this.fbo1.texture,tDepth:this.fbo1.depthTexture,tDiffuseBlur:this.fbo2.texture,hasBlur:this.hasBlur,mixStrength:h,minDepthThreshold:u,maxDepthThreshold:g,depthScale:d,depthToBlurRatioBias:f,distortion:v,distortionMap:B,mixContrast:C,"defines-USE_BLUR":this.hasBlur?"":void 0,"defines-USE_DEPTH":d>0?"":void 0,"defines-USE_DISTORTION":B?"":void 0}}setupBuffers(t,i){const r={minFilter:P,magFilter:P,encoding:this.gl.outputEncoding},s=new b(t,t,r);s.depthBuffer=!0,s.depthTexture=new L(t,t),s.depthTexture.format=N,s.depthTexture.type=j;const n=new b(t,t,r);this.fbo1=s,this.fbo2=n,this.kawaseBlurPass=new ne,this.kawaseBlurPass.setSize(i[0],i[1])}beforeRender(){if(!this.parent||(this.reflectorWorldPosition.setFromMatrixPosition(this.parent.matrixWorld),this.cameraWorldPosition.setFromMatrixPosition(this.camera.matrixWorld),this.rotationMatrix.extractRotation(this.parent.matrixWorld),this.normal.copy(this.planeNormal),this.normal.applyMatrix4(this.rotationMatrix),this.reflectorWorldPosition.addScaledVector(this.normal,this.reflectorOffset),this.view.subVectors(this.reflectorWorldPosition,this.cameraWorldPosition),this.view.dot(this.normal)>0))return;this.view.reflect(this.normal).negate(),this.view.add(this.reflectorWorldPosition),this.rotationMatrix.extractRotation(this.camera.matrixWorld),this.lookAtPosition.set(0,0,-1),this.lookAtPosition.applyMatrix4(this.rotationMatrix),this.lookAtPosition.add(this.cameraWorldPosition),this.target.subVectors(this.reflectorWorldPosition,this.lookAtPosition),this.target.reflect(this.normal).negate(),this.target.add(this.reflectorWorldPosition),this.virtualCamera.position.copy(this.view),this.virtualCamera.up.set(0,1,0),this.virtualCamera.up.applyMatrix4(this.rotationMatrix),this.virtualCamera.up.reflect(this.normal),this.virtualCamera.lookAt(this.target),this.virtualCamera.far=this.camera.far,this.virtualCamera.updateMatrixWorld(),this.virtualCamera.projectionMatrix.copy(this.camera.projectionMatrix),this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.virtualCamera.projectionMatrix),this.textureMatrix.multiply(this.virtualCamera.matrixWorldInverse),this.textureMatrix.multiply(this.parent.matrixWorld),this.reflectorPlane.setFromNormalAndCoplanarPoint(this.normal,this.reflectorWorldPosition),this.reflectorPlane.applyMatrix4(this.virtualCamera.matrixWorldInverse),this.clipPlane.set(this.reflectorPlane.normal.x,this.reflectorPlane.normal.y,this.reflectorPlane.normal.z,this.reflectorPlane.constant);const t=this.virtualCamera.projectionMatrix;this.q.x=(Math.sign(this.clipPlane.x)+t.elements[8])/t.elements[0],this.q.y=(Math.sign(this.clipPlane.y)+t.elements[9])/t.elements[5],this.q.z=-1,this.q.w=(1+t.elements[10])/t.elements[14],this.clipPlane.multiplyScalar(2/this.clipPlane.dot(this.q)),t.elements[2]=this.clipPlane.x,t.elements[6]=this.clipPlane.y,t.elements[10]=this.clipPlane.z+1,t.elements[14]=this.clipPlane.w}update(){if(this.parent.material!==this)return;this.parent.visible=!1;const t=this.gl.xr.enabled,i=this.gl.shadowMap.autoUpdate;this.beforeRender(),this.gl.xr.enabled=!1,this.gl.shadowMap.autoUpdate=!1,this.gl.setRenderTarget(this.fbo1),this.gl.state.buffers.depth.setMask(!0),this.gl.autoClear||this.gl.clear(),this.gl.render(this.scene,this.virtualCamera),this.hasBlur&&this.kawaseBlurPass.render(this.gl,this.fbo1,this.fbo2),this.gl.xr.enabled=t,this.gl.shadowMap.autoUpdate=i,this.parent.visible=!0,this.gl.setRenderTarget(null)}onBeforeCompile(t,...i){super.onBeforeCompile(t,...i),this.defines===void 0&&(this.defines={}),this.defines.USE_UV||(this.defines.USE_UV=""),this.reflectorProps["defines-USE_BLUR"]!==void 0&&(this.defines.USE_BLUR=""),this.reflectorProps["defines-USE_DEPTH"]!==void 0&&(this.defines.USE_DEPTH=""),this.reflectorProps["defines-USE_DISTORTION"]!==void 0&&(this.defines.USE_DISTORTION="");let r=this.reflectorProps;for(let s in r)t.uniforms[s]={get value(){return r[s]}};t.vertexShader=`
              uniform mat4 textureMatrix;
              varying vec4 my_vUv;     
            ${t.vertexShader}`,t.vertexShader=t.vertexShader.replace("#include <project_vertex>",`
            #include <project_vertex>
            my_vUv = textureMatrix * vec4( position, 1.0 );
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
            `),t.fragmentShader=`
              uniform sampler2D tDiffuse;
              uniform sampler2D tDiffuseBlur;
              uniform sampler2D tDepth;
              uniform sampler2D distortionMap;
              uniform float distortion;
              uniform float cameraNear;
              uniform float cameraFar;
              uniform bool hasBlur;
              uniform float mixBlur;
              uniform float mirror;
              uniform float mixStrength;
              uniform float minDepthThreshold;
              uniform float maxDepthThreshold;
              uniform float mixContrast;
              uniform float depthScale;
              uniform float depthToBlurRatioBias;
              varying vec4 my_vUv;        
              ${t.fragmentShader}`,t.fragmentShader=t.fragmentShader.replace("#include <emissivemap_fragment>",`
            #include <emissivemap_fragment>
          
            float distortionFactor = 0.0;
            #ifdef USE_DISTORTION
              distortionFactor = texture2D(distortionMap, vUv).r * distortion;
            #endif
      
            vec4 new_vUv = my_vUv;
            new_vUv.x += distortionFactor;
            new_vUv.y += distortionFactor;
      
            vec4 base = texture2DProj(tDiffuse, new_vUv);
            vec4 blur = texture2DProj(tDiffuseBlur, new_vUv);
            
            vec4 merge = base;
            
            #ifdef USE_NORMALMAP
              vec2 normal_uv = vec2(0.0);
              vec4 normalColor = texture2D(normalMap, vUv);
              vec3 my_normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );
              vec3 coord = new_vUv.xyz / new_vUv.w;
              normal_uv = coord.xy + coord.z * my_normal.xz * 0.05 * normalScale;
              vec4 base_normal = texture2D(tDiffuse, normal_uv);
              vec4 blur_normal = texture2D(tDiffuseBlur, normal_uv);
              merge = base_normal;
              blur = blur_normal;
            #endif
      
            float depthFactor = 0.0001;
            float blurFactor = 0.0;
      
            #ifdef USE_DEPTH
              vec4 depth = texture2DProj(tDepth, new_vUv);
              depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));
              depthFactor *= depthScale;
              depthFactor = max(0.0001, min(1.0, depthFactor));
      
              #ifdef USE_BLUR
                blur = blur * min(1.0, depthFactor + depthToBlurRatioBias);
                merge = merge * min(1.0, depthFactor + 0.5);
              #else
                merge = merge * depthFactor;
              #endif
        
            #endif
      
            float reflectorRoughnessFactor = roughness;
            #ifdef USE_ROUGHNESSMAP
              vec4 reflectorTexelRoughness = texture2D( roughnessMap, vUv );
              
              reflectorRoughnessFactor *= reflectorTexelRoughness.g;
            #endif
            
            #ifdef USE_BLUR
              blurFactor = min(1.0, mixBlur * reflectorRoughnessFactor);
              merge = mix(merge, blur, blurFactor);
            #endif
      
            vec4 newMerge = vec4(0.0, 0.0, 0.0, 1.0);
            newMerge.r = (merge.r - 0.5) * mixContrast + 0.5;
            newMerge.g = (merge.g - 0.5) * mixContrast + 0.5;
            newMerge.b = (merge.b - 0.5) * mixContrast + 0.5;
            
            diffuseColor.rgb = diffuseColor.rgb * ((1.0 - min(1.0, mirror)) + newMerge.rgb * mixStrength);
            `)}}export{oe as default};
