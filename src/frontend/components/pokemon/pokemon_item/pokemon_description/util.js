

export const parseFlavorText = (entries) => entries.find(entry => entry.language.name === 'en' && entry.version.name === 'omega-ruby').flavor_text;