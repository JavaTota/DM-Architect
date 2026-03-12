1. Project Overview
This app helps Dungeon Masters quickly create and organize Dungeons & Dragons campaigns using AI. It generates structured elements like worlds, NPCs, quests, and session plans while keeping everything stored and editable in one workspace. The goal is to reduce preparation time and help DMs focus more on storytelling and gameplay.

2. Problem
What problem are you solving?
Creating a D&D campaign takes a lot of time.


DMs often struggle with writer’s block.


Notes get scattered across multiple documents.



3. Solution
How your app solves it.
AI generates structured campaign elements


Everything is saved in one organized dashboard


Campaign data stays connected (NPCs, quests, sessions)







4. MVP Features
List the first version features only.
Create campaigns


Generate campaign overviews


Generate NPCs


Generate quests


Generate session plans


Edit and save content


Take notes during sessions and use them to shape future story developments


5. Future Features
Ideas for later versions.
map generator


encounter balancing


faction relationship charts


player handouts


voice AI for NPCs






6. App Pages
List every page.
Landing Page – Introduces the app, explains its features, and allows users to sign up or log in.


Sign Up / Login – User authentication to create an account and access campaigns.


Dashboard – Shows all the user’s campaigns and allows them to create, open, duplicate, or delete campaigns.


Create Campaign Page – Form where the Dungeon Master enters basic campaign information (theme, setting, tone, party level, etc.) before generating the campaign.


Campaign Workspace – Main area where the campaign is organized and edited. Includes sections for overview, NPCs, quests, sessions, and notes.


NPC Manager – Page for generating, editing, and organizing NPCs in the campaign.


Quest Manager – Page for generating and managing main quests and side quests.


Session Planner – Allows the DM to generate and plan individual sessions, including encounters, story beats, and twists.


Notes Page – Used during or after sessions to record events, player actions, and story developments.


AI Assistant – Chat-style tool where the DM can ask for ideas, improv help, or story adjustments based on the campaign context.








7. Database Models
Database Models
User – Stores account information for each Dungeon Master, such as name, email, and saved campaigns.


Campaign – Stores the main campaign details, including title, theme, tone, setting, party level, summary, and main story information.


NPC – Stores non-player characters tied to a campaign, including name, role, personality, goals, secrets, and relationships.


Quest – Stores main quests and side quests, including objectives, hooks, rewards, complications, and consequences.


Session – Stores individual session plans, including opening scenes, encounters, important events, twists, and possible outcomes.


Note – Stores notes taken during or after sessions, including player decisions, unexpected events, and story changes that should affect future sessions.


Location – Stores important places in the campaign, such as towns, dungeons, taverns, and regions, along with descriptions and story relevance.


Faction – Stores groups or organizations in the campaign world, including goals, allies, enemies, and influence on the story.









8. AI Features
AI Features
The app will use AI to generate and expand campaign elements based on user input. Each feature will use structured prompts so the generated content fits into the campaign database.
Campaign Generator
Creates the foundation of a campaign.
Prompt example:
 “Generate a Dungeons & Dragons campaign based on the following inputs: theme, tone, setting type, party level, and campaign idea. Provide a campaign title, a short overview, the main conflict, a primary villain or threat, a starting location, and a hook for the first quest.”

NPC Generator
Creates important characters connected to the campaign.
Prompt example:
 “Generate an NPC for a D&D campaign using the campaign summary and setting. Include name, race/species, role, personality traits, motivation, secret, and how they connect to the story.”

Quest Generator
Creates main quests or side quests.
Prompt example:
 “Create a D&D quest for a party of level [X] within the context of this campaign. Include a quest title, objective, hook, complications, possible encounters, rewards, and potential consequences if the players fail.”

Session Generator
Generates structured plans for individual game sessions.
Prompt example:
 “Create a session outline for a D&D campaign based on the campaign context and current quest. Include an opening scene, key encounters, important NPC interactions, clues, a twist, and possible outcomes.”

Improvisation Assistant
Helps the DM react to unexpected player actions.
Prompt example:
 “The players did the following unexpected action: [description]. Based on the campaign context, suggest three ways the story could adapt, two new hooks, and one consequence that moves the story forward.”

Session Note Expansion
Turns session notes into future story developments.











9. Tech Stack
Frontend
Next.js – for building the web application interface


React – for interactive UI components


Tailwind CSS – for styling and responsive design


Backend
Node.js – server environment


Next.js API Routes or Express – to handle API requests and business logic


Database
MongoDB – to store campaigns, NPCs, quests, sessions, and notes


Authentication
Clerk or Supabase Auth – for user sign-up, login, and account management


AI Integration
LLM API – to generate campaign content such as NPCs, quests, and session plans


Hosting & Deployment
Vercel – for frontend hosting and deployment


MongoDB Atlas – cloud database hosting


Version Control
Git & GitHub – for source control and collaboration


10. Build Plan
Phase 1 – Project Setup
 Set up the project structure, install the tech stack, configure the database, and implement user authentication (sign up, login, and user accounts).
Phase 2 – Campaign Creation
 Build the dashboard and campaign creation form. Allow users to create, view, edit, and delete campaigns stored in the database.
Phase 3 – AI Campaign Generation
 Implement the AI campaign generator to create the campaign overview, main conflict, starting location, and first quest hook based on user input.
Phase 4 – NPC and Quest Generation
 Add AI tools to generate NPCs and quests tied to the campaign and store them in the database. Allow users to edit and organize them.
Phase 5 – Session Planner
 Create a session planning tool where users can generate and manage session outlines, encounters, and story events.
Phase 6 – Notes and Story Updates
 Implement a note-taking feature for recording events during sessions and use AI to turn those notes into future story developments.
Phase 7 – AI Assistant
 Add a chat-style assistant that understands the campaign context and helps with improvisation, new ideas, and story adjustments.
Phase 8 – UI Improvements and Deployment
 Polish the interface, improve usability, test features, and deploy the application for public use.







Prompt Library
This section stores all prompts used by the AI features in the application. Keeping prompts centralized makes it easier to refine generation quality and maintain consistency across the app.

Campaign Generator Prompt
Purpose: Generate the foundation of a campaign.
Prompt:
 Generate a Dungeons & Dragons campaign based on the following inputs:
 Theme: {theme}
 Tone: {tone}
 Setting Type: {settingType}
 Party Level: {partyLevel}
 Campaign Idea: {idea}
Return the following structured information:
Campaign Title


Campaign Overview


Main Conflict


Primary Villain or Threat


Starting Location


First Quest Hook


Keep the tone consistent with the input and make the story suitable for tabletop gameplay.

NPC Generator Prompt
Purpose: Generate important characters connected to the campaign.
Prompt:
 Using the campaign context below, generate a non-player character for a Dungeons & Dragons campaign.
Campaign Summary: {campaignSummary}
 Location: {location}
 NPC Role: {role}
Return:
Name


Race or Species


Role in the Story


Personality Traits


Motivation


Secret


Relationship to Other Characters or Factions


The NPC should feel connected to the campaign world and potentially influence the story.

Quest Generator Prompt
Purpose: Generate main or side quests.
Prompt:
 Create a Dungeons & Dragons quest based on the campaign context.
Campaign Summary: {campaignSummary}
 Party Level: {partyLevel}
 Location: {location}
Return:
Quest Title


Objective


Hook (how players get the quest)


Key Encounters


Complications


Reward


Consequences if ignored or failed


Ensure the quest fits naturally within the campaign story.

Session Generator Prompt
Purpose: Generate session outlines.
Prompt:
 Create a session outline for a Dungeons & Dragons campaign.
Campaign Context: {campaignSummary}
 Current Quest: {quest}
 Party Level: {partyLevel}
Return:
Opening Scene


Key Encounters


Important NPC Interactions


Clues or Discoveries


Plot Twist


Possible Session Outcomes


The session should be playable and adaptable for tabletop gameplay.

Improvisation Assistant Prompt
Purpose: Help the DM react to unexpected player actions.
Prompt:
 The players took the following unexpected action: {playerAction}
Based on the campaign context below, suggest ways to continue the story.
Campaign Context: {campaignSummary}
Return:
3 ways the story could adapt


2 new story hooks


1 consequence that changes the campaign world


Focus on maintaining narrative tension and player agency.

Session Notes Expansion Prompt
Purpose: Turn session notes into future story ideas.
Prompt:
 Analyze the following session notes and summarize what happened. Then suggest how these events could affect future sessions.
Session Notes: {notes}
 Campaign Context: {campaignSummary}
Return:
Summary of the session


Story consequences


New quest ideas


NPC reactions


Potential plot twists


The suggestions should help the Dungeon Master continue the campaign naturally.

Campaign Memory System
Purpose
The Campaign Memory System ensures that the AI remembers important elements of the campaign—such as NPCs, factions, locations, quests, and past session events—when generating new content. This allows the AI to produce story elements that remain consistent with the existing campaign world instead of generating disconnected ideas.
Without a memory system, most AI generators produce isolated outputs that do not remember previous events. By storing campaign information in a structured database and retrieving it during generation, the AI can maintain narrative continuity and create more meaningful story developments.
Modern AI applications often use a technique called retrieval-augmented generation (RAG), which retrieves relevant information from external data sources before generating responses. This allows the model to use domain-specific knowledge from databases or documents instead of relying only on its training data.

How the Memory System Works
Campaign Data Storage
 All campaign elements are stored in the database, including:


NPCs


factions


locations


quests


past sessions


session notes


Context Retrieval
 When the user asks the AI to generate something (a quest, NPC, or session), the system retrieves relevant campaign data from the database.


Context Injection
 The retrieved data is added to the AI prompt so the model understands the current world state.


Generation
 The AI generates new content using:


the user request


retrieved campaign memory


the existing story context


This process allows the AI to produce results that are consistent with previous events and characters.

Example Workflow
Example: The DM asks the AI to generate a new quest.
The system retrieves:
the campaign summary


current location


existing NPCs


active quests


recent session events


Then the AI receives a prompt like:
Campaign Summary:
{campaignSummary}

Current Location:
{location}

Important NPCs:
{npcList}

Recent Session Events:
{sessionNotes}

Generate a new quest that logically follows the current story.
Because the AI sees the existing campaign context, it can generate quests that involve existing NPCs, factions, or locations.

Example in Practice
If the campaign already contains:
Villain: The Hollow King
 Location: Blackharbor
 NPC: Captain Serra Vale
Instead of generating random content, the AI might produce:
a quest where Captain Serra Vale asks the party to investigate cult activity


a hidden connection between the cult and the Hollow King


a dungeon beneath Blackharbor linked to previous events


This creates a coherent evolving story instead of disconnected ideas.

Benefits
The campaign memory system provides several advantages:
Maintains story continuity


Reduces repetitive or inconsistent AI outputs


Connects new quests and NPCs to the existing narrative


Allows the campaign world to evolve based on session events


Improves the usefulness of AI generation for Dungeon Masters



Future Improvements
Later versions of the system could include:
Faction relationship tracking


character relationship graphs


timeline of campaign events


memory-based NPC behavior


story arc prediction


These additions would allow the AI to behave more like a collaborative storytelling assistant instead of a simple content generator.

Story Consistency Engine
Purpose
The Story Consistency Engine ensures that new AI-generated content does not contradict existing campaign lore. It checks newly generated quests, NPCs, locations, and story events against the campaign memory system before saving them.
This helps maintain narrative consistency and prevents the AI from generating information that conflicts with previously established story elements.

Problem It Solves
Without consistency checks, AI generation can introduce contradictions such as:
NPCs behaving differently from their established personality


characters appearing in locations they should not be in


quests conflicting with previous story outcomes


villains changing motivations unexpectedly


previously destroyed locations appearing again


The Story Consistency Engine reduces these issues by validating generated content against existing campaign data.

How It Works
Content Generation
 The AI generates a new element (quest, NPC, session plan, etc.).


Context Comparison
 The system compares the generated content with stored campaign data such as:


NPC roles


faction relationships


location history


past session outcomes


ongoing quests


Consistency Check
 The system identifies potential conflicts or contradictions.


Adjustment or Feedback
 If inconsistencies are detected, the system can:


regenerate the content


modify it to match the story context


highlight the issue to the Dungeon Master for approval



Example Workflow
The DM asks the AI to generate a new quest.
The AI returns:
Quest: “Investigate the missing captain of the guard.”


However, the campaign memory system shows:
Captain Serra Vale is already active and currently leading the city defense.


The Story Consistency Engine detects the conflict and suggests adjustments:
Possible correction:
The missing person is a lieutenant working under Captain Serra Vale


The lieutenant was investigating cult activity connected to the villain


This keeps the story aligned with existing campaign lore.

Benefits
The Story Consistency Engine improves the overall quality of the campaign by:
preventing narrative contradictions


maintaining character continuity


keeping quests connected to the main storyline


ensuring locations and factions evolve logically


reducing the need for manual corrections by the DM



Future Enhancements
Future versions could include:
automatic lore tracking


campaign timeline visualization


relationship graphs between NPCs and factions


story arc analysis


conflict detection for world events


These improvements would further strengthen the AI’s ability to act as a collaborative storytelling assistant.


Living Campaign Timeline
Purpose
The Living Campaign Timeline tracks everything that happens in the campaign over time. It records session events, player decisions, NPC actions, and world changes so the story evolves naturally instead of resetting every time new content is generated.
This turns your app from a content generator into a campaign management system.

Why This Feature Matters
Most AI D&D tools only generate ideas like:
random NPCs


random quests


random locations


But they don’t remember what actually happened during the game.
Dungeon Masters care much more about:
what the players did last session


how the world changes because of it


how NPCs react


how the villain adapts


Your app becomes powerful when it tracks cause and effect.

Example
Session 1:
 Players burn down a smuggler warehouse.
Timeline entry:
Session 1 Event
Location: Blackharbor docks
Event: Players destroyed smuggler warehouse
Faction Impact: Smuggler guild loses major supply hub
NPC Impact: Guild leader now hunting the players
Session 2 generation:
Instead of random content, the AI now generates:
bounty hunters looking for the party


black market prices rising


a desperate smuggler offering revenge against the guild


The world reacts to player actions.

What the Timeline Stores
Each timeline entry should include:
session number


location


event description


NPCs involved


factions affected


consequences


future hooks


Example structure:
Timeline Event
Session: 3
Title: Cult Ritual Interrupted
Location: Old Cathedral
NPCs: Captain Serra Vale
Faction: Hollow Flame Cult
Outcome: Ritual partially completed
Consequence: Dark magic spreading in the city

How the AI Uses the Timeline
Whenever the AI generates:
a new quest


an NPC reaction


a session plan


a faction move


The system includes the recent timeline events in the prompt.
Example:
Recent Campaign Events:
- Players destroyed smuggler warehouse
- Cult ritual partially completed
- Captain Serra Vale suspects the party

Generate the next session based on these events.
This creates continuity and evolving storylines.

Timeline Features for the App
Session Event Logging
After each session, the DM writes quick notes about what happened.
AI Event Expansion
AI turns short notes into structured timeline events.
Example:
DM note:
Players killed the cult priest but the ritual portal stayed open.
AI expands into:
event summary


consequences


faction reactions


new plot hooks



World Reaction Generator
The AI can generate:
NPC responses


faction moves


environmental changes


rumors spreading through towns



Benefits
The Living Campaign Timeline:
keeps the story consistent


makes the world feel alive


reduces DM preparation time


allows the AI to build on past events


supports long campaigns


This is the feature that transforms the app from idea generator → storytelling engine.

Example User Flow
DM finishes a session.
They write:
Players stole the royal artifact from the temple.
The AI expands it:
Event: Royal artifact stolen
Faction Impact: Temple priests demand investigation
NPC Impact: High Priest suspects the players
World Impact: Guards begin searching travelers
Future Hook: Artifact attracts a powerful spirit
Next time the DM generates a quest, the AI uses this event.

Why This Makes Your App Unique
Most AI tools generate isolated content.
Your app will generate connected stories.
That difference is what makes a tool that DMs will actually keep using for months or years.
