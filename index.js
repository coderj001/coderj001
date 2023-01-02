const octokit = require('@octokit/rest')()

async function main() {
    // Replace with your own GitHub username
    const username = 'coderj001'
    const repo = 'github.com/coderj001/coderj001'

    // Get the user's recent activity
    const activity = await octokit.activity.listEventsForUser({
        username,
        per_page: 10
    })

    // Generate the Markdown for the activity list
    let markdown = '## Recent Activity\n'
    for (const event of activity.data) {
        markdown += `- ${event.created_at}: ${event.type} - [${event.repo.name}](${event.repo.url})\n`
    }

    // Update the readme with the new activity list
    const readme = await octokit.repos.getReadme({
        owner: username,
        repo: 'my-repo'
    })
    const newReadme = readme.data.content.replace(
        /## Recent Activity(.|\n)*?##/,
        `${markdown}##`
    )
    await octokit.repos.updateFile({
        owner: username,
        repo: repo,
        path: 'README.md',
        message: 'Update recent activity',
        content: Buffer.from(newReadme).toString('base64'),
        sha: readme.data.sha
    })
}

main()
