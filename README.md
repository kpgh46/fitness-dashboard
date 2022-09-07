# Workout Generator

This app generates fitness workouts based on user input.

[Preview](https://kpgh46.github.io/fitness-dashboard/)

## Overview

This app fetches data from ExcerciseDB API. THe data is organized based on user input including number of days, amount of time, and equipment. Based on this input, a weekly workout plan is generated. The workout plan is designed specifically to cycle through primary body parts such as legs, shoulders, chest, back, and core. Workouts can be marked as complete and tracked on a daily or weekly basis.

## Functionality

The app accepts parameters from the user including the number of days they have available, the amount of time per day, and equipment. The workouts are displayed by primary body part. Clicking on a workout will display a "Selected Workout" Embedded into each excercise in a selected workout is a gif of the excercise. Individual days can be marked as Complete, which is displayed in the "Progress and Motivation" section. If a user completes all workouts in a single week, the week is tracked. Finally, a daily motiviational quote can be displayed. These quotes are fetched from "Bodybuilding Quotes" API.

## Features

-   Workouts generated based on user input
-   Weekly workouts are designed to cycle through each body part
-   Individual and weekly progress is tracked
-   GIFs of each excercise are available
-   Motiviational quotes can be displayed

## Technologies

-   Javascript
-   Bootstrap5
-   CSS3
