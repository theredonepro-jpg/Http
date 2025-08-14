local HttpService = game:GetService("HttpService")
local url = "https://your-server-url/topgames" -- hosted URL

local success, response = pcall(function()
    return HttpService:GetAsync(url)
end)

if success then
    local games = HttpService:JSONDecode(response)
    for _, game in ipairs(games) do
        print(game.name)
    end
else
    warn("Failed to fetch games")
end
