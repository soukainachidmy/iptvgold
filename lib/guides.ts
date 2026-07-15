export type GuideSection = {
  heading: string;
  body: string;
  steps?: string[];
};

export type InstallationGuide = {
  slug: string;
  device: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keyword: string;
  intro: string;
  sections: GuideSection[];
  tips: string[];
  devices: string[];
};

export const installationGuides: InstallationGuide[] = [
  {
    slug: "amazon-firestick",
    device: "Amazon Firestick",
    title: "How to Install IPTV on Amazon Firestick — Complete Guide",
    metaTitle: "Install IPTV on Amazon Firestick — Step-by-Step Guide | IPTVGOLD",
    metaDescription:
      "Learn how to install IPTV on your Amazon Firestick in minutes. Complete step-by-step guide for IPTV Smarters Pro on Firestick with IPTVGOLD subscription.",
    keyword: "install IPTV on Amazon Firestick",
    intro:
      "Installing IPTV on your Amazon Firestick is quick and straightforward. This guide walks you through the entire process — from enabling unknown sources to setting up IPTV Smarters Pro with your IPTVGOLD subscription.",
    sections: [
      {
        heading: "What You Need Before Starting",
        body: "Before you begin the installation, make sure you have the following ready:",
        steps: [
          "An Amazon Firestick (4K, 4K Max, or 3rd Gen) connected to your TV and Wi-Fi",
          "Your IPTVGOLD subscription credentials (username, password, and server URL)",
          "A stable internet connection of at least 10 Mbps for HD or 25 Mbps for 4K",
          "The Downloader app installed on your Firestick (free from Amazon Appstore)",
        ],
      },
      {
        heading: "Step 1: Enable Apps from Unknown Sources",
        body:
          "By default, Firestick only allows apps from the Amazon Appstore. You need to enable installation from unknown sources to install IPTV apps.",
        steps: [
          "Go to Settings (gear icon) on your Firestick home screen",
          "Select My Fire TV > Developer Options",
          "Turn on 'Apps from Unknown Sources'",
          "Also enable 'ADB Debugging' for smoother sideloading",
        ],
      },
      {
        heading: "Step 2: Install the Downloader App",
        body:
          "The Downloader app lets you enter a URL and download APK files directly to your Firestick.",
        steps: [
          "Go to the Search icon on your Firestick home screen",
          "Type 'Downloader' and select the app with the orange icon",
          "Click Download / Get to install it",
          "Open Downloader and allow file access when prompted",
        ],
      },
      {
        heading: "Step 3: Download IPTV Smarters Pro",
        body:
          "IPTV Smarters Pro is the most popular IPTV player for Firestick. It supports live TV, VOD, EPG, and catch-up.",
        steps: [
          "Open the Downloader app",
          "In the URL bar, type: iptvsmarters.com and press Go",
          "Download the Android APK version of IPTV Smarters Pro",
          "Once downloaded, click Install and wait for the installation to complete",
        ],
      },
      {
        heading: "Step 4: Configure IPTV Smarters Pro with IPTVGOLD",
        body:
          "Now that the app is installed, you need to add your IPTVGOLD subscription.",
        steps: [
          "Open IPTV Smarters Pro on your Firestick",
          "Select 'Login with Xtream Codes API'",
          "Enter any name (e.g., IPTVGOLD)",
          "Enter your IPTVGOLD username provided in your activation email",
          "Enter your IPTVGOLD password",
          "Enter the server URL from your activation email",
          "Click Login and wait for the playlist to load",
        ],
      },
      {
        heading: "Step 5: Start Streaming",
        body:
          "Once logged in, you will see Live TV, Movies, and Series tabs. Navigate using your Firestick remote and start streaming.",
        steps: [
          "Select Live TV to browse 18,000+ channels by category",
          "Use the Movies tab for your 60,000+ VOD library",
          "The EPG (TV Guide) shows what's currently playing and what's next",
          "Press the menu button on your remote to access settings and favorites",
        ],
      },
    ],
    tips: [
      "If the app crashes, clear the cache from Settings > Applications > IPTV Smarters Pro > Clear Cache",
      "Use a VPN for the best streaming experience and to avoid ISP throttling",
      "For 4K content, ensure your Firestick is the 4K or 4K Max model",
      "If channels freeze, try switching to a different server URL from your activation email",
    ],
    devices: ["Firestick 4K", "Firestick 4K Max", "Firestick 3rd Gen", "Fire TV Cube", "Fire TV Edition Smart TV"],
  },
  {
    slug: "iptv-smarters-pro",
    device: "IPTV Smarters Pro",
    title: "How to Set Up IPTV Smarters Pro — Complete Configuration Guide",
    metaTitle: "IPTV Smarters Pro Setup Guide — Configure IPTV on Any Device | IPTVGOLD",
    metaDescription:
      "Complete guide to setting up IPTV Smarters Pro on any device. Learn how to configure Xtream Codes, add playlists, and stream with your IPTVGOLD subscription.",
    keyword: "set up IPTV Smarters Pro",
    intro:
      "IPTV Smarters Pro is one of the most powerful IPTV players available, supporting live TV, VOD, EPG, and catch-up on Android, iOS, Firestick, and Smart TVs. This guide covers the complete setup process with your IPTVGOLD subscription.",
    sections: [
      {
        heading: "What is IPTV Smarters Pro?",
        body:
          "IPTV Smarters Pro is a free IPTV player that connects to your IPTV subscription via Xtream Codes API or M3U playlist URL. It does not include any content itself — it reads your IPTVGOLD subscription and displays channels, movies, and series in an organized interface.",
      },
      {
        heading: "Downloading IPTV Smarters Pro",
        body: "The app is available on multiple platforms. Download it from the official source for your device:",
        steps: [
          "Android: Download from the Google Play Store or the official website",
          "iOS: Search 'IPTV Smarters Pro' on the App Store",
          "Firestick: Use the Downloader app and enter iptvsmarters.com",
          "Smart TV: Check your TV's app store or sideload via USB",
          "Windows/Mac: Download from the official website",
        ],
      },
      {
        heading: "Step 1: Launch and Choose Login Method",
        body:
          "When you first open IPTV Smarters Pro, you will see two login options. For IPTVGOLD subscriptions, use Xtream Codes API.",
        steps: [
          "Open IPTV Smarters Pro",
          "Select 'Login with Xtream Codes API' (recommended for IPTVGOLD)",
          "Alternatively, you can use 'Login with M3U Playlist' if you have an M3U URL",
        ],
      },
      {
        heading: "Step 2: Enter Your IPTVGOLD Credentials",
        body:
          "Fill in the required fields with the information from your IPTVGOLD activation email.",
        steps: [
          "Enter a name for the connection (e.g., IPTVGOLD)",
          "Enter your username from the activation email",
          "Enter your password from the activation email",
          "Enter the server URL from the activation email (e.g., http://server.iptvgold.com:8080)",
          "Click 'Add User' or 'Login'",
        ],
      },
      {
        heading: "Step 3: Wait for Playlist to Load",
        body:
          "IPTV Smarters Pro will download your channel list, VOD library, and EPG data. This can take 1-3 minutes depending on your internet speed and the size of your playlist.",
        steps: [
          "You will see a loading screen with progress",
          "Once loaded, you will see three main sections: Live TV, Movies, and Series",
          "The EPG (Electronic Program Guide) will populate in the background",
        ],
      },
      {
        heading: "Step 4: Navigate and Customize",
        body:
          "IPTV Smarters Pro offers several customization options to enhance your viewing experience.",
        steps: [
          "Use the Live TV tab to browse channels by category or country",
          "Add channels to favorites by long-pressing (or selecting the star icon)",
          "Go to Settings to change the player (VLC or built-in), theme, and EPG display",
          "Enable 'Catch-up' for channels that support it to watch missed programs",
          "Set up parental controls in Settings if needed",
        ],
      },
      {
        heading: "Step 5: Troubleshooting Common Issues",
        body:
          "If you encounter issues, here are the most common solutions:",
        steps: [
          "If login fails, double-check your username, password, and server URL for typos",
          "If channels don't load, try switching to an alternate server URL from your email",
          "If video freezes, change the video player to VLC in Settings > Player Selection",
          "Clear the app cache and re-login if the app becomes sluggish",
        ],
      },
    ],
    tips: [
      "Use the built-in player for better compatibility, or VLC for advanced codecs",
      "Enable 'Auto-update EPG' in settings for the latest program guide",
      "Create multiple profiles if you share the subscription with family",
      "Use the search function to quickly find channels by name",
    ],
    devices: ["Android", "iOS", "Firestick", "Smart TV", "Windows PC", "Mac"],
  },
  {
    slug: "apple-tv",
    device: "Apple TV",
    title: "How to Install IPTV on Apple TV — Step-by-Step Guide",
    metaTitle: "Install IPTV on Apple TV — Complete Setup Guide | IPTVGOLD",
    metaDescription:
      "Learn how to install and configure IPTV on Apple TV using IPTV Smarters Pro or GSE Smart IPTV. Step-by-step guide for Apple TV 4K with IPTVGOLD.",
    keyword: "install IPTV on Apple TV",
    intro:
      "Setting up IPTV on Apple TV is simple with the right app. This guide covers installing IPTV Smarters Pro or GSE Smart IPTV on your Apple TV and configuring it with your IPTVGOLD subscription.",
    sections: [
      {
        heading: "What You Need",
        body: "Before starting, make sure you have:",
        steps: [
          "An Apple TV 4K or Apple TV HD (4th generation)",
          "An Apple ID with App Store access",
          "Your IPTVGOLD subscription credentials",
          "A stable internet connection (10+ Mbps for HD, 25+ Mbps for 4K)",
        ],
      },
      {
        heading: "Step 1: Download an IPTV Player from the App Store",
        body:
          "Apple TV does not allow sideloading, so you need to use an IPTV player available on the App Store.",
        steps: [
          "Go to the App Store on your Apple TV",
          "Search for 'IPTV Smarters Pro' or 'GSE Smart IPTV'",
          "Download and install the app (both are free)",
          "Open the app once installation is complete",
        ],
      },
      {
        heading: "Step 2: Add Your IPTVGOLD Playlist",
        body:
          "Both apps support Xtream Codes API and M3U playlists. We recommend using Xtream Codes for the best experience.",
        steps: [
          "Open the IPTV player app",
          "Select 'Add Playlist' or 'Add User'",
          "Choose 'Xtream Codes' as the connection type",
          "Enter your IPTVGOLD username, password, and server URL",
          "Save and wait for the playlist to load",
        ],
      },
      {
        heading: "Step 3: Browse and Stream",
        body:
          "Once the playlist loads, you can start streaming immediately.",
        steps: [
          "Navigate to Live TV to see all 18,000+ channels",
          "Use the Movies and Series tabs for VOD content",
          "Use the Apple TV remote to navigate and select",
          "Add channels to favorites for quick access",
        ],
      },
      {
        heading: "Step 4: Optimizing for Apple TV",
        body:
          "Apple TV supports high-quality streaming. Here's how to get the best experience:",
        steps: [
          "In the app settings, select the native player for best compatibility",
          "Ensure your Apple TV is set to 4K resolution (Settings > Video and Audio)",
          "Use a wired Ethernet connection for the most stable streaming",
          "Enable EPG in the app settings to see the program guide",
        ],
      },
    ],
    tips: [
      "GSE Smart IPTV is a good alternative if IPTV Smarters Pro is unavailable",
      "Use AirPlay to cast IPTV from your iPhone if the app doesn't work on Apple TV",
      "Keep the app updated for the latest features and bug fixes",
      "If video stutters, try lowering the stream quality in the app settings",
    ],
    devices: ["Apple TV 4K", "Apple TV HD (4th Gen)", "Apple TV 4K (2nd Gen)"],
  },
  {
    slug: "android-devices",
    device: "Android Devices",
    title: "How to Install IPTV on Android Devices — Phones, Tablets & TV Boxes",
    metaTitle: "Install IPTV on Android — Phone, Tablet & TV Box Guide | IPTVGOLD",
    metaDescription:
      "Complete guide to installing IPTV on Android phones, tablets, and TV boxes. Set up IPTV Smarters Pro or TiviMate with your IPTVGOLD subscription.",
    keyword: "install IPTV on Android",
    intro:
      "Android is the most flexible platform for IPTV streaming. This guide covers installing and configuring IPTV on Android phones, tablets, and Android TV boxes with your IPTVGOLD subscription.",
    sections: [
      {
        heading: "Compatible Android Devices",
        body:
          "IPTVGOLD works on any Android device running Android 5.0 or higher, including phones, tablets, Android TV boxes, and Android-based Smart TVs.",
      },
      {
        heading: "Step 1: Choose Your IPTV Player",
        body:
          "There are several excellent IPTV players on Android. We recommend:",
        steps: [
          "IPTV Smarters Pro — free, full-featured, supports Xtream Codes and M3U",
          "TiviMate — premium player optimized for Android TV, excellent EPG",
          "GSE Smart IPTV — free, supports multiple playlists and formats",
          "Perfect Player — lightweight, good for older devices",
        ],
      },
      {
        heading: "Step 2: Install from Google Play Store",
        body:
          "On Android phones and tablets, install directly from the Play Store. On Android TV boxes, use the TV version of the Play Store.",
        steps: [
          "Open the Google Play Store on your device",
          "Search for 'IPTV Smarters Pro' or 'TiviMate'",
          "Tap Install and wait for the download to complete",
          "Open the app once installed",
        ],
      },
      {
        heading: "Step 3: Configure with IPTVGOLD",
        body:
          "Add your IPTVGOLD subscription using the Xtream Codes API method.",
        steps: [
          "Open the IPTV player app",
          "Select 'Add Playlist' or 'Login with Xtream Codes'",
          "Enter your IPTVGOLD username",
          "Enter your IPTVGOLD password",
          "Enter the server URL from your activation email",
          "Save and wait for the playlist to load (1-3 minutes)",
        ],
      },
      {
        heading: "Step 4: Start Watching",
        body:
          "Your channels, movies, and series are now available. Use the app interface to browse and stream.",
        steps: [
          "Browse Live TV by category, country, or favorites",
          "Access 60,000+ VOD titles in the Movies and Series sections",
          "Use the EPG to see what's on now and what's coming up",
          "Set up favorites for one-tap access to your most-watched channels",
        ],
      },
      {
        heading: "Sideloading on Android TV Boxes",
        body:
          "If an app isn't available on the Play Store, you can sideload it:",
        steps: [
          "Download the APK file from the official website onto a USB drive",
          "Install a file manager app (e.g., File Commander) on your TV box",
          "Connect the USB drive and use the file manager to locate the APK",
          "Tap the APK to install (enable 'Unknown sources' if prompted)",
        ],
      },
    ],
    tips: [
      "TiviMate offers the best experience on Android TV boxes but requires a premium upgrade",
      "Use a 5GHz Wi-Fi connection or Ethernet for the most stable streaming",
      "Clear the app cache monthly to keep performance smooth",
      "Use a VPN if you experience ISP throttling or buffering",
    ],
    devices: ["Android Phones", "Android Tablets", "Android TV Boxes", "NVIDIA Shield TV", "Mi Box", "Android Smart TVs"],
  },
  {
    slug: "samsung-smart-tv",
    device: "Samsung Smart TV",
    title: "How to Install IPTV on Samsung Smart TV — Complete Guide",
    metaTitle: "Install IPTV on Samsung Smart TV — Step-by-Step Guide | IPTVGOLD",
    metaDescription:
      "Learn how to install and stream IPTV on your Samsung Smart TV using Tizen apps or Developer Mode. Complete setup guide with IPTVGOLD subscription.",
    keyword: "install IPTV on Samsung Smart TV",
    intro:
      "Samsung Smart TVs run the Tizen operating system, which has a more limited app selection than Android. This guide covers multiple methods to get IPTV working on your Samsung Smart TV with IPTVGOLD.",
    sections: [
      {
        heading: "Method 1: Use the Smart IPTV App",
        body:
          "Smart IPTV is one of the most popular IPTV players available on Samsung's app store.",
        steps: [
          "Turn on your Samsung Smart TV and press the Smart Hub button on your remote",
          "Navigate to the Samsung Apps store",
          "Search for 'Smart IPTV'",
          "Download and install the app",
          "Open Smart IPTV — you will see a MAC address on screen",
          "Go to the Smart IPTV website on your computer or phone",
          "Enter the MAC address and your IPTVGOLD M3U playlist URL",
          "Click 'Send' and restart the Smart IPTV app on your TV",
        ],
      },
      {
        heading: "Method 2: Use Set IPTV App",
        body:
          "Set IPTV is another reliable option available on the Samsung App Store.",
        steps: [
          "Search for 'Set IPTV' in the Samsung Apps store",
          "Download and install it",
          "Open the app and note the MAC address",
          "Go to the Set IPTV activation portal on another device",
          "Enter the MAC address and your IPTVGOLD M3U URL",
          "Upload the playlist and restart the app",
        ],
      },
      {
        heading: "Method 3: Developer Mode Sideloading",
        body:
          "For advanced users, you can enable Developer Mode on your Samsung TV to sideload apps like IPTV Smarters.",
        steps: [
          "On your TV, go to Settings > Developer Mode and turn it on",
          "Enter your IP address and set the TV to Developer Mode",
          "On your PC, download the Tizen Studio IDE",
          "Connect your PC and TV to the same network",
          "Build and deploy IPTV Smarters as a Tizen app",
          "This method requires technical knowledge and is for advanced users",
        ],
      },
      {
        heading: "Method 4: Use a Streaming Device",
        body:
          "If none of the above methods work, the simplest solution is to connect an external streaming device.",
        steps: [
          "Plug an Amazon Firestick or Android TV box into your Samsung TV's HDMI port",
          "Follow the Firestick or Android installation guide",
          "Switch your TV to the HDMI input to use the streaming device",
          "This gives you access to all IPTV apps including IPTV Smarters Pro",
        ],
      },
      {
        heading: "Recommended Setup",
        body:
          "For most Samsung Smart TV users, we recommend Method 1 (Smart IPTV) as it is the easiest and most reliable. If you have a newer Samsung model (2021+), Set IPTV may work better.",
      },
    ],
    tips: [
      "Smart IPTV has a small activation fee after a 7-day free trial",
      "Use a wired Ethernet connection for the most stable streaming on Smart TVs",
      "If the app doesn't appear in the store, your TV model may not be supported — use a Firestick instead",
      "Ensure your Samsung TV firmware is up to date for the best app compatibility",
    ],
    devices: ["Samsung Smart TVs (2016+)", "Samsung QLED TVs", "Samsung Crystal UHD TVs", "Samsung Neo QLED"],
  },
  {
    slug: "buzz-tv",
    device: "Buzz TV",
    title: "How to Set Up IPTV on Buzz TV — Complete Configuration Guide",
    metaTitle: "Set Up IPTV on Buzz TV — Step-by-Step Guide | IPTVGOLD",
    metaDescription:
      "Complete guide to configuring IPTV on Buzz TV boxes (XR4000, XR4500, E2). Learn how to add your IPTVGOLD subscription and start streaming in minutes.",
    keyword: "set up IPTV on Buzz TV",
    intro:
      "Buzz TV is a dedicated IPTV box designed specifically for streaming. This guide covers setting up your IPTVGOLD subscription on Buzz TV models including XR4000, XR4500, and E2.",
    sections: [
      {
        heading: "What You Need",
        body: "Before starting, ensure you have:",
        steps: [
          "A Buzz TV box (XR4000, XR4500, or E2) connected to your TV",
          "A stable internet connection (Ethernet recommended)",
          "Your IPTVGOLD subscription credentials (username, password, server URL)",
          "The Buzz TV remote control",
        ],
      },
      {
        heading: "Step 1: Connect Your Buzz TV",
        body:
          "First, make sure your Buzz TV is properly set up and connected to the internet.",
        steps: [
          "Connect the Buzz TV box to your TV via HDMI",
          "Power on the box and wait for the home screen to load",
          "Go to Settings > Network and connect to Wi-Fi or Ethernet",
          "Run a speed test to ensure you have at least 10 Mbps download speed",
        ],
      },
      {
        heading: "Step 2: Open the Buzz TV App",
        body:
          "Buzz TV comes with a built-in IPTV app. On newer models, it may be called 'BuzzTV 5' or 'MyTVOnline'.",
        steps: [
          "From the home screen, open the Buzz TV / MyTVOnline app",
          "If this is your first time, you will see a setup wizard",
          "Select 'Add Provider' or 'Add Playlist'",
          "Choose 'Xtream Codes' as the provider type",
        ],
      },
      {
        heading: "Step 3: Enter Your IPTVGOLD Credentials",
        body:
          "Fill in the fields with your IPTVGOLD subscription details.",
        steps: [
          "Enter a name for the provider (e.g., IPTVGOLD)",
          "Enter your IPTVGOLD username",
          "Enter your IPTVGOLD password",
          "Enter the server URL from your activation email",
          "Click 'OK' or 'Connect' to save",
        ],
      },
      {
        heading: "Step 4: Load and Browse Channels",
        body:
          "The app will download your playlist. This usually takes 1-2 minutes.",
        steps: [
          "Wait for the channels, VOD, and EPG to load",
          "You will see Live TV, Movies, and Series sections",
          "Use the remote to navigate categories and channels",
          "Press the 'Guide' button on the remote for the EPG",
          "Add channels to favorites with the remote's favorite button",
        ],
      },
      {
        heading: "Step 5: Optimize Your Buzz TV Settings",
        body:
          "Buzz TV offers several settings to improve your streaming experience.",
        steps: [
          "Go to Settings > Playback and select the appropriate decoder (VLC or ExoPlayer)",
          "Enable 'Timeshift' to pause and rewind live TV",
          "Set the default video quality based on your internet speed",
          "Configure the EPG update frequency (daily recommended)",
        ],
      },
    ],
    tips: [
      "Buzz TV XR4500 supports 4K UHD streaming — ensure your TV and HDMI cable support 4K",
      "Use Ethernet instead of Wi-Fi for the most stable streaming experience",
      "Update the Buzz TV firmware regularly for the latest features and fixes",
      "If channels freeze, try switching the decoder between VLC and ExoPlayer in settings",
    ],
    devices: ["Buzz TV XR4000", "Buzz TV XR4500", "Buzz TV E2", "Buzz TV XR2600"],
  },
  {
    slug: "formuler",
    device: "Formuler",
    title: "How to Set Up IPTV on Formuler — Complete Guide for Z8 & Z11",
    metaTitle: "Set Up IPTV on Formuler Z8 & Z11 — Step-by-Step Guide | IPTVGOLD",
    metaDescription:
      "Learn how to configure IPTV on Formuler Z8, Z11, and Z+ Neo. Complete setup guide for MyTVOnline 3 with your IPTVGOLD subscription.",
    keyword: "set up IPTV on Formuler",
    intro:
      "Formuler devices like the Z8, Z11, and Z+ Neo are premium IPTV boxes that come with the MyTVOnline app pre-installed. This guide covers setting up your IPTVGOLD subscription on any Formuler device.",
    sections: [
      {
        heading: "What You Need",
        body: "Before starting, make sure you have:",
        steps: [
          "A Formuler device (Z8, Z11, Z+ Neo, or Z Alpha) connected to your TV",
          "A stable internet connection (Ethernet strongly recommended for Formuler)",
          "Your IPTVGOLD subscription credentials",
          "The Formuler remote control",
        ],
      },
      {
        heading: "Step 1: Connect and Update Your Formuler",
        body:
          "Before setting up IPTV, make sure your Formuler device is up to date.",
        steps: [
          "Connect the Formuler to your TV via HDMI and power it on",
          "Go to Settings > Network and connect to Wi-Fi or Ethernet",
          "Go to Settings > System Update and check for firmware updates",
          "Install any available updates and restart the device",
        ],
      },
      {
        heading: "Step 2: Open MyTVOnline",
        body:
          "MyTVOnline is Formuler's built-in IPTV app. On newer models, it may be MyTVOnline 3.",
        steps: [
          "From the home screen, open the MyTVOnline app",
          "If this is your first time, you will see a welcome screen",
          "Select 'Add Service' or 'Add Provider'",
          "Choose 'Xtream Codes' as the service type",
        ],
      },
      {
        heading: "Step 3: Enter Your IPTVGOLD Details",
        body:
          "Fill in the connection details from your IPTVGOLD activation email.",
        steps: [
          "Enter a service name (e.g., IPTVGOLD)",
          "Enter your IPTVGOLD username",
          "Enter your IPTVGOLD password",
          "Enter the server URL from your activation email",
          "Click 'OK' or 'Connect' to save and load",
        ],
      },
      {
        heading: "Step 4: Wait for Playlist to Load",
        body:
          "MyTVOnline will download your channel list, VOD content, and EPG data. This typically takes 1-3 minutes.",
        steps: [
          "You will see a loading progress bar",
          "Once loaded, you will see Live TV, VOD (Movies & Series), and Recordings tabs",
          "The EPG will populate in the background",
        ],
      },
      {
        heading: "Step 5: Navigate and Stream",
        body:
          "Formuler's MyTVOnline has one of the best IPTV interfaces available.",
        steps: [
          "Use the Live TV tab to browse 18,000+ channels by category or country",
          "Access 60,000+ VOD titles in the Movies and Series sections",
          "Press the 'Guide' button on the remote for the full EPG",
          "Use the 'Fav' button to add channels to your favorites list",
          "Use the 'Portal' button to switch between providers if you have multiple",
        ],
      },
      {
        heading: "Step 6: Advanced Settings",
        body:
          "Formuler devices offer advanced settings for the best streaming experience.",
        steps: [
          "Go to Settings > Playback and select the decoder (ExoPlayer or VLC)",
          "Enable 'Timeshift' to pause and rewind live TV (requires USB storage)",
          "Set the default aspect ratio and zoom for your TV",
          "Configure recording settings if you have a USB drive connected",
        ],
      },
    ],
    tips: [
      "Formuler Z11 supports 4K UHD — ensure your TV and HDMI cable are 4K-capable",
      "Always use Ethernet on Formuler devices for the most stable streaming",
      "MyTVOnline 3 on the Z11 has the best IPTV interface on the market",
      "If you experience buffering, try changing the decoder in playback settings",
    ],
    devices: ["Formuler Z11", "Formuler Z8", "Formuler Z+ Neo", "Formuler Z Alpha", "Formuler GTV"],
  },
  {
    slug: "roku",
    device: "Roku",
    title: "How to Watch IPTV on Roku — Complete Setup Guide",
    metaTitle: "Watch IPTV on Roku — Complete Setup Guide | IPTVGOLD",
    metaDescription:
      "Learn how to stream IPTV on Roku devices. Step-by-step guide using screen mirroring or the Web Video Caster app with your IPTVGOLD subscription.",
    keyword: "watch IPTV on Roku",
    intro:
      "Roku does not officially support IPTV apps in its Channel Store, but you can still stream IPTV on Roku using screen mirroring or third-party methods. This guide covers the best ways to watch IPTVGOLD on your Roku device.",
    sections: [
      {
        heading: "Method 1: Screen Mirroring from Android or Windows",
        body:
          "The easiest way to watch IPTV on Roku is to mirror your phone or computer screen to the TV.",
        steps: [
          "On your Roku, go to Settings > System > Screen mirroring and enable it",
          "On your Android phone, install IPTV Smarters Pro from the Play Store",
          "Configure IPTV Smarters Pro with your IPTVGOLD credentials",
          "Open your phone's screen mirroring feature (Smart View, Cast, etc.)",
          "Select your Roku device from the list",
          "Your phone screen will appear on your TV — open IPTV Smarters and start streaming",
        ],
      },
      {
        heading: "Method 2: Use the Web Video Caster App",
        body:
          "Web Video Caster is available on the Roku Channel Store and can play IPTV streams.",
        steps: [
          "On your Roku, go to the Channel Store and search for 'Web Video Caster'",
          "Install the app on your Roku",
          "On your phone, install the Web Video Caster companion app",
          "Open the phone app and enter your IPTVGOLD M3U playlist URL",
          "Select a channel and cast it to your Roku device",
        ],
      },
      {
        heading: "Method 3: Use Roku Developer Mode (Advanced)",
        body:
          "For advanced users, you can sideload a private channel using Roku's developer mode.",
        steps: [
          "Enable Developer Mode on your Roku (Settings > System > Advanced System Settings > Developer Mode)",
          "Set a developer password and note your Roku's IP address",
          "On your PC, create a Roku app package that includes an IPTV player",
          "Use the Roku Developer Console to sideload the app",
          "This method requires programming knowledge and is for advanced users only",
        ],
      },
      {
        heading: "Method 4: Use a Streaming Device (Recommended)",
        body:
          "The most reliable way to get full IPTV functionality on a Roku TV is to add a dedicated streaming device.",
        steps: [
          "Purchase an Amazon Firestick or Android TV box",
          "Plug it into an available HDMI port on your Roku TV",
          "Follow the Firestick or Android installation guide to set up IPTV",
          "Switch your Roku TV to the HDMI input to use the streaming device",
          "This gives you full access to IPTV Smarters Pro, TiviMate, and other apps",
        ],
      },
      {
        heading: "Which Method Should You Choose?",
        body:
          "For most users, Method 1 (Screen Mirroring) is the easiest and fastest. If you want a permanent solution, Method 4 (adding a Firestick) is the most reliable and gives you the full IPTV experience with a proper remote and interface.",
      },
    ],
    tips: [
      "Screen mirroring quality depends on your Wi-Fi — use 5GHz for best results",
      "Keep your phone charged while screen mirroring as it uses significant battery",
      "Roku Ultra and Roku Streaming Stick 4K support the best screen mirroring quality",
      "If you experience lag with screen mirroring, try reducing the stream quality in IPTV Smarters settings",
    ],
    devices: ["Roku Ultra", "Roku Streaming Stick 4K", "Roku Express 4K", "Roku Premiere", "Roku TV (TCL, Hisense)"],
  },
];
