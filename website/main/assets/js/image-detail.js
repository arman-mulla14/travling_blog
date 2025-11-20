// Image data with details about each location
const imageData = [
    {
        id: 1,
        title: "Pangong Lake with Mountains",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        altitude: "4,350 m (14,270 ft)",
        bestTime: "May to September",
        distance: "160 km from Leh",
        description: "Pangong Lake is one of the highest saltwater lakes in the world and a crown jewel of Ladakh. Stretching across 134 km, two-thirds of the lake lies in Tibet while one-third is in Ladakh. The crystalline blue waters reflect the surrounding mountain peaks, creating a mesmerizing landscape that changes colors throughout the day.",
        activities: ["Photography and nature walks", "Camping and stargazing", "Bird watching", "Sunrise and sunset viewing", "Local village exploration"],
        tips: ["Obtain a permit before visiting", "Acclimatize to the high altitude", "Carry warm clothing even in summer", "Start early to avoid crowds", "Bring plenty of water and snacks"]
    },
    {
        id: 2,
        title: "Snow Capped Peaks",
        image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop",
        altitude: "5,000+ m (16,400+ ft)",
        bestTime: "June to August",
        distance: "Varies (40-200 km)",
        description: "The snow-capped peaks of Ladakh form part of the Karakoram and Hindu Kush mountain ranges. These majestic peaks, some permanently covered in snow, dominate the landscape and create breathtaking vistas.",
        activities: ["Trekking and mountaineering", "Photography expeditions", "Alpine hiking", "Glacier viewing", "Mountaineering camps"],
        tips: ["Hire experienced local guides", "Check weather conditions", "Carry altitude sickness medication", "Pack layers for changing weather", "Start acclimatization early"]
    },
    {
        id: 3,
        title: "Ladakh Valley",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        altitude: "3,500 m (11,480 ft)",
        bestTime: "April to October",
        distance: "30-50 km from Leh",
        description: "The Ladakh Valley, with its wide-open spaces and sparse vegetation, represents the heart of the region. Carved by the Indus River, this high-altitude desert valley is home to small villages and ancient monasteries.",
        activities: ["Village tours and homestays", "Monastery visits", "Agricultural tourism", "Local market exploration", "Cultural interaction"],
        tips: ["Respect local customs and traditions", "Support local businesses", "Take time to acclimatize", "Try local Ladakhi cuisine", "Learn a few Ladakhi words"]
    },
    {
        id: 4,
        title: "Mountain Range at Sunset",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
        altitude: "4,000-5,500 m (13,120-18,040 ft)",
        bestTime: "May to September",
        distance: "Varies by location",
        description: "Ladakh's mountain ranges transform magnificently at sunset, with golden and crimson hues illuminating the barren slopes. This time of day offers the most dramatic photography opportunities.",
        activities: ["Photography", "Sunset watching", "Meditation", "Sketching and painting", "Nature observation"],
        tips: ["Scout locations during daylight", "Arrive early for good vantage points", "Bring a tripod for photography", "Carry warm layers", "Stay safe and avoid wandering in darkness"]
    },
    {
        id: 5,
        title: "Alpine Landscape",
        image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop",
        altitude: "4,200 m (13,780 ft)",
        bestTime: "June to September",
        distance: "80-120 km from Leh",
        description: "Alpine meadows in Ladakh showcase ecological diversity. During summer, these high-altitude plains burst into life with sparse grasses and hardy wildflowers.",
        activities: ["Trekking and camping", "Wildflower photography", "Wildlife observation", "Botanical exploration", "Picnicking"],
        tips: ["Camp only in designated areas", "Leave no trace", "Respect wildlife", "Bring adequate water", "Watch for weather changes"]
    },
    {
        id: 6,
        title: "Mountain Vista",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        altitude: "4,000+ m (13,120+ ft)",
        bestTime: "May to September",
        distance: "Varies",
        description: "Mountain vistas in Ladakh offer panoramic views that extend for hundreds of kilometers. From various vantage points, visitors can see layers of mountain ranges and deep valleys.",
        activities: ["Panoramic photography", "Viewpoint trekking", "Contemplation", "Drone photography", "Landscape painting"],
        tips: ["Bring sunscreen and sunglasses", "Use polarizing filters", "Visit in early morning", "Acclimatize before hiking", "Respect local access restrictions"]
    },
    {
        id: 7,
        title: "High Altitude Pass",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        altitude: "5,000-5,600 m (16,400-18,370 ft)",
        bestTime: "July to September",
        distance: "80-250 km from Leh",
        description: "Ladakh is famous for its numerous high-altitude passes. Khardung La, Chang La, and Tanglang La are legendary among travelers and offer thrilling driving experiences.",
        activities: ["Vehicle driving adventures", "Photography at pass summits", "Acclimatization treks", "Prayer flag walks", "Souvenir shopping"],
        tips: ["Drive carefully on narrow roads", "Descend if experiencing altitude sickness", "Carry oxygen", "Check weather and road conditions", "Stop frequently to acclimatize"]
    },
    {
        id: 8,
        title: "Boulder Fields",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        altitude: "3,500-4,500 m (11,480-14,760 ft)",
        bestTime: "May to September",
        distance: "30-100 km from Leh",
        description: "Unique boulder formations dot the Ladakh landscape, creating surreal geological scenes. These massive rocks are results of ancient geological processes.",
        activities: ["Rock scrambling", "Geology study", "Photography", "Exploration and adventure", "Educational tours"],
        tips: ["Wear sturdy hiking boots", "Be cautious of unstable rocks", "Bring plenty of water", "Don't climb alone", "Respect geological formations"]
    },
    {
        id: 9,
        title: "Mountain Peaks",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
        altitude: "5,200+ m (17,060+ ft)",
        bestTime: "June to August",
        distance: "Varies",
        description: "The mountain peaks surrounding Ladakh form some of the world's most spectacular scenery. The peaks include famous summits like Stok Kangri.",
        activities: ["Mountaineering expeditions", "Peak trekking", "Base camp experiences", "Alpine climbing", "Expedition photography"],
        tips: ["Obtain proper permits", "Hire experienced climbing guides", "Undertake fitness training", "Acclimatize thoroughly", "Carry mountaineering equipment"]
    },
    {
        id: 10,
        title: "Serene Mountain Lake",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        altitude: "4,100 m (13,450 ft)",
        bestTime: "May to September",
        distance: "40-80 km from Leh",
        description: "Mountain lakes of Ladakh are serene and pristine, reflecting the surrounding peaks like natural mirrors. These high-altitude lakes are often home to unique fish species.",
        activities: ["Lake-side camping", "Meditation and yoga", "Bird watching", "Reflection photography", "Peaceful walks"],
        tips: ["Water is cold", "Camp away from shores", "Respect wildlife habitats", "Carry water purification tablets", "Bring binoculars"]
    },
    {
        id: 11,
        title: "Ridge Trail",
        image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop",
        altitude: "4,300-4,800 m (14,100-15,750 ft)",
        bestTime: "June to August",
        distance: "30-150 km from Leh",
        description: "Ridge trails in Ladakh offer exhilarating trekking experiences with expansive views. These trails range from day hikes to multi-day treks.",
        activities: ["Ridge trekking", "Day hikes", "Multi-day trekking", "Sunrise/sunset hikes", "Photography walks"],
        tips: ["Start early for day hikes", "Carry sufficient water and snacks", "Wear proper trekking boots", "Check weather forecasts", "Inform someone of your plans"]
    },
    {
        id: 12,
        title: "Desert Mountains",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        altitude: "3,000-4,500 m (9,840-14,760 ft)",
        bestTime: "April to October",
        distance: "Varies",
        description: "Ladakh's mountains are characterized by arid, desert-like conditions. These stark, barren peaks showcase millions of years of geological history.",
        activities: ["Desert trekking", "Geological tours", "Photography expeditions", "Adventure travel", "Off-road exploration"],
        tips: ["Carry extra water", "Use high SPF sunscreen", "Wear a hat and sunglasses", "Start journeys early", "Have emergency supplies"]
    }
];

// Current image index
let currentImageIndex = 0;

// Load image details on page load
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const imageId = params.get('id');
    
    if (imageId) {
        currentImageIndex = parseInt(imageId) - 1;
    }
    
    displayImage();
    setupNavigation();
});

// Display current image details
function displayImage() {
    if (currentImageIndex < 0 || currentImageIndex >= imageData.length) {
        currentImageIndex = 0;
    }
    
    const image = imageData[currentImageIndex];
    
    document.getElementById('detailImage').src = image.image;
    document.getElementById('detailImage').alt = image.title;
    document.getElementById('locationTitle').textContent = image.title;
    document.getElementById('altitude').textContent = image.altitude;
    document.getElementById('bestTime').textContent = image.bestTime;
    document.getElementById('distance').textContent = image.distance;
    document.getElementById('description').textContent = image.description;
    
    // Add activities list
    const activitiesList = document.getElementById('activities');
    activitiesList.innerHTML = '';
    image.activities.forEach(activity => {
        const li = document.createElement('li');
        li.textContent = activity;
        activitiesList.appendChild(li);
    });
    
    // Add tips list
    const tipsList = document.getElementById('tips');
    tipsList.innerHTML = '';
    image.tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
    });
    
    // Update URL without page reload
    window.history.replaceState({}, document.title, `image-detail.html?id=${image.id}`);
}

// Setup navigation buttons
function setupNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + imageData.length) % imageData.length;
        displayImage();
        window.scrollTo(0, 0);
    });
    
    nextBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % imageData.length;
        displayImage();
        window.scrollTo(0, 0);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === 'ArrowRight') nextBtn.click();
    });
}
