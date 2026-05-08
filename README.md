# Saleyard Buyer

A live-bidding companion for Australian saleyard buyers. Built for iPad. Works offline once installed.

Author: Patrick Coole

## What's in this folder

This is a complete, ready-to-host web app. Every file you need is here. You do not need to install anything, edit anything, or open the code.

```
saleyard-buyer/
  index.html
  app.js
  manifest.webmanifest
  service-worker.js
  icon-192.png
  icon-512.png
  apple-touch-icon.png
  lib/
    react.production.min.js
    react-dom.production.min.js
    xlsx.full.min.js
  README.md  (this file)
```

You're going to do two things, in order:

1. **Host** the folder on a free static-hosting service so it has a public web address.
2. **Install** that web address onto each iPad's home screen, where it will behave like a normal app.

The whole process should take about 10 minutes the first time.

## Step 1: Host the app on Netlify (free, no account verification, no card)

Netlify Drop is the simplest free host on the internet. You drag the folder onto a web page and it gives you a working URL.

1. On any computer (or even on the iPad itself), open Safari or Chrome and go to **https://app.netlify.com/drop**
2. Drag the entire `saleyard-buyer` folder onto the dashed-border drop zone in the centre of the page. (If you only have the zip file, unzip it first, then drag the folder it contains.)
3. Wait about 20 to 60 seconds while Netlify uploads and publishes the site.
4. Netlify will give the site a random URL such as `https://dazzling-marigold-ab12cd.netlify.app`. **Copy this URL**. This is the address of your app.
5. Netlify will prompt you to "Claim your site" by signing up. Sign up with email or a Google account. Claiming the site keeps it live permanently. If you don't claim it, the site disappears after 24 hours.
6. Once claimed, you can go to Site settings and rename the URL to something memorable, for example `coole-saleyard.netlify.app`. Optional but recommended.

That's it. The app is now live on the public internet at that URL. Anyone with the link can reach it. There is no login. If you want to lock it down later you can, but for personal use among a small group it's not necessary.

### If you'd rather use Cloudflare Pages

Cloudflare Pages is also free and slightly more robust for long-term use. The process is similar: go to **https://pages.cloudflare.com**, sign up, choose "Upload assets" when creating a project, and drag the folder. You'll need to verify an email and give it a project name. The result is a URL like `coole-saleyard.pages.dev`.

Either host is fine. Pick one.

## Step 2: Install the app on each iPad

Do this once on each iPad you want to use. After it's done, the app behaves like any other iPad app.

1. Open **Safari** on the iPad. (It must be Safari, not Chrome. iOS only allows Safari to install web apps to the home screen.)
2. Go to the URL you got from Netlify (the one ending in `.netlify.app`).
3. The app will load. Wait a few seconds for it to finish loading completely. This is a good moment to bookmark the page.
4. Tap the **Share** button (the square with an arrow pointing up, in the top-right of Safari on iPad).
5. Scroll down the share sheet and tap **Add to Home Screen**.
6. You'll see a preview with the app's icon and the name "Saleyard". Tap **Add** in the top-right corner.
7. The app icon now appears on the iPad home screen. Tap it. The app opens full-screen, without the Safari address bar, just like any other app.

The first time you open it, the app pulls everything it needs over the internet and stores it on the iPad. From then on it works whether the iPad has signal or not.

## Day-to-day use

Once installed, the app works completely offline. You can drive into any saleyard with no signal and the app will load instantly and behave normally. Your purchase records save automatically to the iPad. Closing the app doesn't lose anything.

A few things to know:

- **Each iPad keeps its own records.** There is no cloud sync. If two people are buying simultaneously and you want a combined record, each person emails their daily summary at the end and you merge them in Excel.
- **The "Email" button** at the top right generates an Excel spreadsheet of the day's purchases and either shares it directly to the Mail app (using iPad's built-in share sheet) or downloads it to Files for you to attach. If you want it to pre-fill an email to your address, set your email under **Settings**.
- **The "New Day" button** clears the day's purchases. Email yourself the summary first, otherwise the record is gone.
- **Settings** is where you set your $/kg ceilings per line type, change your email, and add or remove line types. Settings persist across days.

## Updating the app later

If you (or I) make changes to the app, you upload the new folder to Netlify the same way. Netlify will replace the old version and the iPads will pick up the new version next time they're online. You won't need to reinstall on the iPads.

## Troubleshooting

- **The app won't install to home screen.** Make sure you're using Safari, not Chrome. Chrome on iOS does not support adding web apps to the home screen.
- **The app loads but looks like plain text with no styling.** Wait a few seconds. The fonts and styles are still loading. If it persists, you may have lost connection during first load. Reconnect to wifi/cellular and refresh.
- **The Email button does nothing.** Make sure you have at least one purchase recorded for the day. The button does nothing if the day's record is empty.
- **The app "forgot" my purchases.** iOS occasionally clears Safari storage if the device is very low on space, or if you cleared Safari data manually. If it's a critical issue, email yourself the summary at the end of every sale day.
- **I want to start fresh.** Tap "New Day" to clear the current day. To wipe all settings and lines too, you'll need to clear browsing data for the site in iPad Settings → Safari, then reload.
