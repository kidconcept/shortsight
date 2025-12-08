---
layout: ../../layouts/PlainPost.astro
title: 'A Better Way to Track Global Time'
src: '/work/sweetclocks/thumb.png'
alt: 'Sweetclocks application running on a laptop'
company: 'Sweetclocks'
category: 'Digital Product'
slug: 'sweetclocks'
summary: "Frequent global travel and remote clients require constant time juggling, a frustration shared by many colleagues since native apps are limited to major cities. Scheduling around remote locations like Punto d'Ouro or Mabul is difficult. While Google provides accurate but non-persistent results, I needed an application that could find times for any location globally and permanently remember all my key timezones for efficient scheduling."
---

# A Better Way to Track Global Time

As a consultant who travels frequently and keeps clients, friends, and family in all corners of the globe, one of the things I'm constantly juggling is what timezone my meetings are in. This difficulty is compounded by no one else being willing to deal with the time conversions. Asking around, I realized all of my colleagues who travel frequently have similar frustrations. The native apps were limited by search: you had to know a major city within the same timezone you were scheduling around. Fine if you are in New York or London, but frustrating if your friend happens to be in Punto d'Ouro, Mozambique or on the Island of Mabul. Asking google for the time always worked, regardless of how remote the location, but it's results were not persistent. I wanted both, an application that returned times for any location on the planet and remembered all the timezones I was interested in.

<figure class="medium">
  <video src="/work/sweetclocks/search.mp4" autoplay loop muted></video>
  <figcaption>Interactions are critical for engagement.</figcaption>
</figure>

## Choosing the API

I originally targeted timezonedb.com to access the timezone information, but soon realized that it's city search API was much more limited that I wanted. It required that the user select a city, and didn't have nearly the same scoped dataset that google provided. Google seemed like the best solution, and with a little searching I found they have a timezone API. Unfortunately it only accepts results from providing geo-coordinates. But a google Places Autocomplete  query provides geo-coordinates for any location which can be easily passed to the timezone API returns everything else I need, the current time in the location, the offset from GMT, and if the location is currently in Daylight savings time. I was ready to start building.

<figure>
  <img src="/work/sweetclocks/code.jpg" />
  <figcaption>I wrote the sweetclocks frontend and backend</figcaption>
</figure>

## Rapid Prototyping

I already had a good idea of what the product requirements were, so I jumped right into the prototype. I wanted to get a working proof of concept done before I started in on the visual layer. This allowed me to hammer out any problems with the application before I got bogged down pushing pixels.

<figure class="medium">
  <img src="/work/sweetclocks/prototype.jpg" />
  <figcaption>I did the designwork in the code layer, saving time and exercising my method</figcaption>
</figure>

## Responsive Scaling

I wanted a design that would scale fluidly between responsive states, so the clocks always took up as much screen as you gave them. However, the internal layout of each clock required a static layout just to keep readable and looking clean. So I settled on having a fixed layout, and then fluidly scaling the clocks all together with a 3D transform ratio applied via Javascript attached to an event listener that detects changes to layout.

<figure>
  <img src="/work/sweetclocks/phones.jpg" />
</figure>

## User Testing

A simple, single page application with very little depth to the user flow is a good candidate for a high rate of problem discoverability. This means testing with 5 users should discover the large majority of usability issues. I sat on sessions with a small number of users who were trying the app for the first time and noted where they were getting lost or confused within the app. This insight allowed me to adjust the introductory tutorial, add features, and tweak the visual design to overcome usability issues.

<figure>
  <img src="/work/sweetclocks/ondesk.jpg" />
  <figcaption>Looks great works great</figcaption>
</figure>