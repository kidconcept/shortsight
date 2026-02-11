---
layout: ../../layouts/PlainPost.astro
title: 'Building Due Diligence'
src: '/work/idiligence/thumb.png'
alt: 'Be diligent.'
company: 'for Morgan Stanley'
category: 'Enterprise'
slug: 'idiligence'
order: 4
summary: "Investment and partnership across a global firm like Morgan Stanley must follow a complex set of regional laws and risk assessments and I designed the software to do it. Working with stakeholders across the firm we designed an app that enabled the due diligence team to work more effectively, reducing overhead and improving legal adherence and risk assessments."
---

<figure class="medium"> 
  <img src="/work/idiligence/thumb.png" />
</figure>

# Building diligence for one of the largest financial institutions globally.

Designing an application that enables Morgan Stanley to build trust with its investors and partners is an incredible opportunity for impact. Case managers within Morgan Stanley's security team typically manage a large volume of multistep, multi stakeholder workflows. Managing this information is both incredibly domain specific work and critical to the firm's success, which means any facilitation that software can layer can have an outsized impact on the firm's performance. It's also high stakes as mistakes in the firm's vetting process can lead to unmitigated risks and legal repercussions, so it's important to get it right.

To understand why, recall that in 2022 Morgan Stanley agreed to a $60 million settlement for mishandling client information in a property sale to a vendor the company had contacted to dispose and recycle of the waste. That's the sort of vendor that Morgan Stanley would be vetting by the securities team. After a string of successful projects at the firm, I was entrusted with designing software that could help agents discover and prevent this kind of damage from the company's future.

<figure class="large"> 
  <img src="/work/idiligence/assignments.png" />
  <figcaption>Each case requires a team effort to properly vet deals across the firm. Managers needed views like this one to manage progress across the analyst team investigating the subject. Each of these analysts has their own workflows whose progress needs to be tracked and incorporated into the investigation.</figcaption>
</figure>

## Spending time working with the users of the application builds trust and empathy, both of which lead to more productive collaboration.

To get this right I opened a lengthy research phase working directly with the security group to understand what they were currently doing to assess the risk of the firm's partners, vendors, and clients. This was no small task, as security was spread across 6 unique global teams each with their own regional culture and process for risk assessment. I facilitated multiple working group sessions for each region and collected insights, interviewing and observing the users at work. Through insights gained during this research I was able to condense seemingly disparate lines of work into a single flow that could meet all regional needs while reducing the development costs significantly while encouraging interregional collaboration. I was called a herculean effort by colleagues at the firm.

 <div class="panzoom top-left">
  <div id="viewer">
    <img
      id="image"
      src="/work/idiligence/idil.png"
      alt="Zoomable"
      draggable="false"
    />
  </div>
</div>
<div class="zoomcaption">Summary insights from the multi-region global research that I led. Zoom and pan for detail.</div>

## Focusing on principle screens before building flows and prototyping helps trim fat and focuses design.

Once I understood the scope of the work across all of the regions I set about designing flows that could facilitate the work across all users. With a solid foundation of research and a maturing design system to draw from the designs proceeded quickly. The software needed to be useful to multiple levels of managers and agents each with their own view of the overall process and their own tasks to complete. The first designs I shipped were single principle screen for each of the personas that came out of our study. This is a barebones approach to design that I favor because it avoids externalities that can complicate development while providing users the most important functionality they need.

<figure class="large"> 
  <img src="/work/idiligence/allcases.png" />
  <figcaption>This all cases view is for a midlevel manager that has multiple agents working on multiple cases below them. Their main work is managing this set of workflows in progress in parallel, and they often cross reference cases. To the right user, this seemingly simple table can save hours of file shuffling each day.</figcaption>
</figure>

Once I had key screens in place for each user I returned to the research to see how those screens would fit into the collective workflow and designed the screens that would connect those individual workflows together. This required building out navigational elements that connected steps in the workflow while providing the necessary context across multiple screens and multiple levels of user permission and oversight. This is where interactive prototypes become critical to ensure that the connections between steps are both useful and not burdensome for the users.

## Interactive prototypes are easier than ever to build and test, and when done properly with front-end in mind will reduce development time later. 

<figure class="large"> 
  <img src="/work/idiligence/attachments.png" />
  <figcaption>The case list bar at the top shows dynamic information and action based on the context of the user and task. This took a while to get right because of the varying permission levels and diverse tasks associated across regions globally.</figcaption>
</figure>

Initially the group wanted to build custom reports from within their application, but after spending time with each of the groups regionally we realized we could save a lot of development effort and better meet the agents' needs by leveraging existing technologies. We pitched integrated Office365 and using an api to populate data within premade templates for the final reports which are this groups main product. The team agreed this would be a huge boost to productivity over the previously planned bespoke system.

## Avoid rebuilding the wheel, work smarter by integrating mature technologies.

With the main flows in place I was free to direct the team to add additional features we thought would be wins. This allowed development on the core application to proceed unimpeded while we played with ideas that would improve the team's efficacy and generally facilitate their work. The messaging system was one of these areas where we felt building our own version would benefit the firm because of the accountability required around security risk assessment. This ensured that records were communicated securely and archived for internal and regulatory requirements.

<figure class="medium"> 
  <img src="/work/idiligence/discussions.png" />
  <figcaption>Sometimes you do need to rebuild something existing, when the context requires it. Like this messaging system that integrates with email and phone while keeping external communications on the project secure and archived.</figcaption>
</figure>

## We shipped software ahead of schedule and under our development budget, and while delivering a great experience that reduced risk across the firm.
