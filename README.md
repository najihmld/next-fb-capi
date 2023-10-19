Facebook / Meta Conversion API for Next.js

> Next.js wrapper for [Facebook's Conversion API](https://developers.facebook.com/docs/marketing-api/conversions-api/)

# Facebook / Meta Conversion API for Next.js
This package helps you implement Facebook Conversion API in Next.js.

It includes an API route handler for sending server-side events to Facebook and client-side functions to trigger the events.

Facebook recommends sending events with Facebook Pixel and the Conversion API with the same event id to match duplicated events.

Therefore, we have added the option to enable standard Facebook Pixel events in this package, where we handle duplicated events out of the box.

Support Next.js API routes on both Vercel and AWS Amplify.

