---
layout: ../../layouts/PlainPost.astro
title: 'Tracking Marine Megafauna'
src: '/work/mmf/thumb.jpg'
alt: 'Mantas for the masses.'
company: 'for the Marine Megafauna Foundation'
category: 'Nonprofit'
slug: 'mmf'
summary: "Mozambique's waters are frequented by iconic megafauna like whale sharks and manta rays. Dive centers in Tofo, Mozambique, collected several years of sightings data for the Marine Megafauna Foundation. To analyze this data, my colleague required an interactive visualization built using plotly.js, for which I was asked to design the complete project."
---

# A Pilot Project for Citizen Science Megafauna Sightings

Some of the most iconic species of megafauna frequent Mozambican waters. Ask many scuba divers what they would most like to see in the water and you will often hear whale shark, manta ray, humpback whale, and many of the other species often spotted on the Mozambique coast. But how often are they spotted? Two dive centers in Tofo, Mozambique have been collecting sightings data on megafauna species for the past several years in collaboration with the Marine Megafauna Foundation. To help understand the dataset, my colleague wanted to build an interactive visualization using plotly.js and asked me to design the project.

<figure>
  <img src="/work/mmf/intro-laptop.jpg" />
  <figcaption>The core interface for Dive the Data provids insights on charismatic megafauna trends over time and space.</figcaption>
</figure>

Interacting with data is a helpful way to understand it and interactive graphs are one of plotly’s strengths. After exploring several design options we settled on three cross graphs that each provide a unique view into the data: location, frequency, and time. Each graph acts as a selection filter for the other two. This allows the user to focus on the sections of the datasets they are most interested in, and hopefully tease insights out from the numbers.

<figure class="medium">
  <img src="/work/mmf/divecenter.jpg" />
  <figcaption>The team at a divecenter in Mozambique is checking out the potential of the platform, after this demonstration they signed up to collect data for the project.</figcaption>
</figure>

## Growing a Global Database

This pilot visualization is using data from a single region and if it proves successful we will expand to other regions. Collecting sightings data on these species can enable researchers to better understand trends that affect these animals, many of which are listed as endangered by the International Union for Conservation of Nature. Through understanding these animals we can better protect them. This project shares insights from the dataset with the dive centers that are collecting the data. The centers can share this insight with their clients and use it to market their business.

<figure>
  <video src="/work/mmf/divethedata-compressed.mp4" autoplay muted loop controls></video>
  <figcaption>The core visualization is a series of cross graphs that allow you to filter based on species, dive site, region, and time.</figcaption>
</figure>

## Improving Data Collection

After an analysis of how the sightings data were collected, I discovered that some of the divemasters weren't recording all of the sightings as the original data collection method was troublesome. We brainstormed a better method of collection by talking to the divemasters: a whiteboard and a cellphone camera. This whiteboard is easily accessible during the dive debrief while the sightings are still fresh in everyone's minds. When the board fills up, photos of the boards are mailed to a Marine Megafauna research assistant who records that data into a sheet, where it gets collated into the site.

<figure>
  <img src="/work/mmf/full-width.jpg" />
  <figcaption>The two ways that most dive centers were thinking about the sightings data were by dive site and by species, so ensuring that both of those views were great was critical to growing adoption.</figcaption>
</figure>

Plotly graphs are great because they offer complex interactions, which allow users to do more with the data. However, for users who’ve never interacted with a graph they can be a challenge to interact with. In user testing, I found that many divers had trouble with plotly’s default interactions. After many iterations modifying the default interactions, adding tutorials, and making subtle changes to the design I was able to improve the success rate significantly.

<figure>
  <img src="/work/mmf/responsive-states.jpg" />
</figure>
