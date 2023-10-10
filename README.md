# Regex-Battle
A Solo and multiplayer real-time web-app where you can improve your Regex skills by challenging your friends. Catch or replace expressions in pre-created or randomly generated inputs as quickly as possible.

# Logbook
It's been a while since I've shared my life in a README... I'll try to be rigorous on this point for 2 reasons :
  - 1) Distance myself from the project and my learning process and have a break during coding sessions
  - 2) Keep updated a to-do list of tasks, features, bugs to solve, things to improve, etc
   
# Todo during next days:
  - Finish the level service testing
  - Modify the level Table to add enum, tables and other stuff I couldn't had before I linked it with MySQL
  - Find a way to simulate the AuthGuard when testing (I temporarily disabled it for the level module)
  - Improving the front part of the authentication feature, I m hesitating about removing NethAuth to entirely manage it by myself, that could help me understand better how to OAuth with apps like Google works when I ll implement it
  - Solve the remaining docker-compose problems I meet, which I think I could solve by exploring the "healthcheck" docker-compose feature.
  - Create a beautiful Makefile with features to quickly access to prisma studio and other tools
  - A solo starter game mode with 10 pre-created levels.

# During the next weeks:
  - Make the solo mode using random pre-created levels clean and fun to play
  - Polish the front
  - Protect the sockets with Bearer
  - Make a multiplayer mode with random level
  - Make the social page with chat and game history and statistics
  - Put the website in production (I feel like this will give me a lot of pain)
  - Start making procedurally generated levels with extern APIs (and perhaps I can take a look at language models - or wait for the day I start Python)
