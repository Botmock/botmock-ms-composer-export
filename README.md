# Botmock Microsoft Composer Export

Node.js project for importing [Botmock](https://botmock.com) projects in [Composer](https://docs.microsoft.com/en-us/composer/introduction)

## Table of Contents

* [Overview](#overview)
  * [Usage](#usage)
  * [Botmock project structure](#botmock-project-structure)
  * [Approach to importing](#approach-to-importing)
  * [Handling import errors](#handling-import-errors)

## Overview

### Usage

> **Note**: prerequisites
> - [Node.js LTS version](https://nodejs.org/en/)

Running the following commands should allow you to generate restorable content from your Botmock project.

- `git clone https://github.com/Botmock/botmock-ms-composer-export.git`
- `cd botmock-ms-composer-export`
- `npm install`
- `mv ./sample.env ./.env` and edit `.env` to contain your token and project ids
- `npm start`

The export is going to create an output folder.


### Botmock Project Structure

To translate Botmock projects into MS Composer project, we make certain assumptions about Botmock project structure:

- Intents should be used on connectors in the flow as often as is meaningful. Doing so helps the script break
  up responses and put them under respective intent triggers

- When using quick replies or suggestion chips in a project, some intent utterances should be designed to exactly match the content of the options in the content block.

### Approach to using the out in Composer

Simply open the Composer app and then point directory to this generated output folder. 
