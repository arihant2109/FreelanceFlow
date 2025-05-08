const parsePrompt = (prompt) => {
    const taskRegex = /(?<action>Create|Update|Delete)\s+(?<entity>client|project|invoice|payment|task)\s*(?<details>.*)/i;
    const detailRegex = /(?<key>\w+):(?<value>[^,]+)(?:,|$)/g;
    const match = prompt.match(taskRegex);
    if (!match || !match.groups) return { error: 'Invalid prompt format.' };

    const { action, entity, details } = match.groups;
    const parsedDetails = {};
    let detailMatch;

    while ((detailMatch = detailRegex.exec(details)) !== null) {
        const key = detailMatch.groups.key.trim();
        const value = detailMatch.groups.value.trim();
        parsedDetails[key] = value;
    }

    return {
        action: action.toLowerCase(),
        entity: entity.toLowerCase(),
        details: parsedDetails,
    };
};

export default parsePrompt;
