(() => {
    const hotspotData = [
        {
            slot: 'hotspot-2',
            title: 'Red Light',
            description: 'The earbud features a glass panel on the outside, which includes a red light that visibly indicates when the earbud is powered on and linked to your device.'
        },
        {
            slot: 'hotspot-3',
            title: 'Microphone',
            description: 'The microphone located on the bottom of the earbud ensures excellent sound quality for phone calls and other audio recordings.'
        },
        {
            slot: 'hotspot-4',
            title: 'Speaker',
            description: 'The Space Pods deliver an exceptional audio experience, featuring a superior microphone that outperforms any other wireless earbud available.'
        },
        {
            slot: 'hotspot-5',
            title: 'Ear Tip',
            description: 'The Space Pods ear tip is crafted from soft silicone, making it the most comfortable wireless earbud on the market.'
        }
    ];
  
    const model = document.querySelector("model-viewer");
    const hotspots = document.querySelectorAll(".Hotspot");
  
    function setHotspotInfo() {
        hotspotData.forEach(data => {
            const hotspotButton = document.querySelector(`button[slot="${data.slot}"]`);
            const annotation = hotspotButton.querySelector(".HotspotAnnotation");
  
            if (annotation) {
                const h2 = annotation.querySelector("h2");
                const p = annotation.querySelector("p");
  
                if (h2 && p) {
                    console.log("Setting data for", data.slot);
                    console.log("Title:", data.title);
                    console.log("Description:", data.description);
  
                    h2.textContent = data.title;
                    p.textContent = data.description;
                } else {
                    console.warn("h2 or p tag not found for slot:", data.slot);
                }
            } else {
                console.warn("Annotation div not found for slot:", data.slot);
            }
        });
    }
  
    function showInfo() {
        let selected = document.querySelector(`button[slot="${this.slot}"] > div`);
        gsap.to(selected, 1, { autoAlpha: 1 });
    }
  
    function hideInfo() {
        let selected = document.querySelector(`button[slot="${this.slot}"] > div`);
        gsap.to(selected, 1, { autoAlpha: 0 });
    }
  
    document.addEventListener("DOMContentLoaded", () => {
        model.addEventListener("load", () => {
            console.log("Model loaded, setting hotspot data...");
            setHotspotInfo();
            hotspots.forEach(function (hotspot) {
                hotspot.addEventListener("mouseover", showInfo);
                hotspot.addEventListener("mouseout", hideInfo);
            });
        });
    });
  })();
  