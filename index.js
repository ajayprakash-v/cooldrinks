gsap.registerPlugin('ScrollTrigger')

	gsap.to('#pinkback',{
		scale:.7,
		scrollTrigger:{
			trigger:'#pinkback',
			start:'top -20%',
			end : 'bottom 10%',
			scrub:'true',
		}
	})
	gsap.to('#sun',{
		rotate:180,
		y:-400,
		scrollTrigger:{
			trigger:'#pinkback',
			start:'top -20%',
			end : 'bottom 10%',
			scrub:2,
		}
	})
	gsap.to('#can',{
		rotate:30,
		scale:1.5,
		y:300,
		scrollTrigger:{
			trigger:'#can',
			start:'top 30%',
			end : 'bottom 10%',
			scrub:2,
		}
	})

	gsap.to('#nav',{
		scale:.6,
		scrollTrigger:{
			trigger:'#can',
			start:'top 50%',
			end : 'bottom 10%',
			scrub:1,
		}
	})

	gsap.to('#cool',{
		y:-500,
		rotate:-30,
		scrollTrigger:{
			trigger:'#pinkback',
			start:'top 10%',
			end : 'bottom 10%',
			scrub:3,
		}
	})
	gsap.to('#tsun',{
		y:300,
		rotate:30,
		scrollTrigger:{
			trigger:'#pinkback',
			start:'top 10%',
			end : 'bottom 10%',
			scrub:3,
		}
	})

	gsap.to('#jumb',{
		scale:1,
		x:-10,
		scrollTrigger:{
			trigger:'#sec2start',
			start:'top 10%',
			end : 'top 100%',
			scrub:3,
		}
	})

	gsap.to('#flower',{
		rotate:360,
		scale:2,
		scrollTrigger:{
			trigger:'#sec2start',
			start:'top 10%',
			end : 'bottom bottom',
			scrub:1,
		}
	})

	gsap.to('#c1',{
		rotate:-30,
		y:-100,
		scrollTrigger:{
			trigger:'#sec2start',
			start:'top 10%',
			end : 'bottom bottom',
			scrub:1,
		}
	})

	gsap.to('#c2',{
		rotate:10,
		y:20,
		scrollTrigger:{
			trigger:'#sec2start',
			start:'top 10%',
			end : 'bottom bottom',
			scrub:1,
		}
	})

	gsap.to('#c3',{
		rotate:-20,
		y:-50,
		scrollTrigger:{
			trigger:'#sec2start',
			start:'top 10%',
			end : 'bottom bottom',
			scrub:1,
		}
	})

	gsap.to('#c4',{
		rotate:20,
		y:50,
		scrollTrigger:{
			trigger:'#sec2start',
			start:'top 10%',
			end : 'bottom bottom',
			scrub:1,
		}
	})

	gsap.to('#ca1',{
		x:0,
		scale:1,
		rotate:0,
		scrollTrigger:{
			trigger:'#sec3',
			start:'top 10%',
			end : 'bottom 150%',
			scrub:2,
		}
	})

	gsap.to('#ca3',{
		x:0,
		scale:1,
		rotate:0,
		scrollTrigger:{
			trigger:'#sec3',
			start:'top 10%',
			end : 'bottom 150%',
			scrub:2,
		}
	})

	gsap.to('#op',{
		scale:1,
		scrollTrigger:{
			trigger:'#sec3',
			start:'top 50%',
			end : 'bottom 150%',
			scrub:2,
		}
	})

	gsap.to('#sec3back',{
		scrollTrigger:{
			trigger:'#sec3',
			start:'top 50%',
			end : 'bottom 20%',
			scrub:2,
			onEnter:()=>{document.getElementById('sec3back').classList.add('sec3back')},
			onEnterBack:()=>{document.getElementById('sec3back').classList.add('sec3back')},
			onLeave:()=>{document.getElementById('sec3back').classList.remove('sec3back')},
			onLeaveBack:()=>{document.getElementById('sec3back').classList.remove('sec3back')},
		}
	})

	gsap.to('#tennis',{
		scrollTrigger:{
			trigger:'#sec4',
			start:'top 50%',
			end : 'bottom 20%',
			scrub:2,
			onEnter:()=>{document.getElementById('tennis').classList.add('tennis')},
			onEnterBack:()=>{document.getElementById('tennis').classList.add('tennis')},
			onLeave:()=>{document.getElementById('tennis').classList.remove('tennis')},
			onLeaveBack:()=>{document.getElementById('tennis').classList.remove('tennis')},
		}
	})

	gsap.to('#surf',{
		scrollTrigger:{
			trigger:'#sec4',
			start:'top 50%',
			end : 'bottom 20%',
			scrub:2,
			onEnter:()=>{document.getElementById('surf').classList.add('surf')},
			onEnterBack:()=>{document.getElementById('surf').classList.add('surf')},
			onLeave:()=>{document.getElementById('surf').classList.remove('surf')},
			onLeaveBack:()=>{document.getElementById('surf').classList.remove('surf')},
		}
	})
	gsap.to('#howto',{
		x:200,
        y:50,
		scrollTrigger:{
			trigger:'#sec4',
			start:'top 30%',
			end : 'bottom bottom',
			scrub:3,
		}
	})
    gsap.to('#review',{
        y:-300,
		scrollTrigger:{
			trigger:'#sec5',
			start:'top 50%',
			end : 'bottom 50%',
			scrub:2,
		}
	})

    gsap.to('#plant',{
        y:-300,
		scrollTrigger:{
			trigger:'#sec5',
			start:'top 50%',
			end : 'bottom 50%',
			scrub:2,
		}
	})
    gsap.to('#book',{
        x:50,
		scrollTrigger:{
			trigger:'#sec5',
			start:'top 50%',
			end : 'bottom 50%',
			scrub:2,
		}
	})
    gsap.to('#coolx',{
        scale:1.2,
        rotate:-10,
        y:-50,
		scrollTrigger:{
			trigger:'#sec5',
			start:'top 50%',
			end : 'bottom 50%',
			scrub:2,
		}
	})
    gsap.to('#yolo',{
        y:-200,
        rotate:30,
		scrollTrigger:{
			trigger:'#sec5',
			start:'top 50%',
			end : 'bottom 50%',
			scrub:3,
		}
	})
    gsap.to('#backcir',{
        scale:2,
		scrollTrigger:{
			trigger:'#sec5',
			start:'top 50%',
			end : 'bottom 50%',
			scrub:5,
		}
	})
    gsap.to('#star2',{
        rotate:360,
		scrollTrigger:{
			trigger:'#sec6',
			start:'top 50%',
			end : 'bottom 50%',
			scrub:5,
		}
	})
