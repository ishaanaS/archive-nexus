
document.getElementById("save-button").addEventListener("click", function () {
    // content of webpage
    const content = `
The Cinematic "Dream Life" of American Politics

Prepolitical Suppression and The Political

Many political theorists writing in the later twentieth century, most notably Hannah Arendt 
and Sheldon Wolin, aimed to delineate and sharpen the boundaries of political practice. 
For these theorists, staking out the boundaries of political life in distinction from other realms
of social existence became a key task. They distinguished the political from cultural and economic 
activities on the one hand, and personal and behavioral processes on the other.

Michael Rogin worked in the other direction, muddying the boundaries of the political to reveal
its inescapable imbrications with cultural formations. His analyses were built upon phenomena usually 
not understood to be part of politics—family dynamics and the individual psyche—but especially mass culture
and the history of cultural production.

Rogin's work on "prepolitical" suppression is key to his analysis of the heteronomy of the political. 
It names a process through which society demarcates politics from its others by "the suppression of politics itself."
Whereas political repression is a process that aims to preempt incipient opposition, from being considered a legitimate
subject of politics. While some ideas and peoples come to be proper subjects of politics in any given time and place, 
prepolitical suppression excludes other ideas, peoples and institutions by rendering them nonpolitical in advance. 
This process involves the “suppression of politics at the prepolitical level, through the transformation of potential
political discontent into problems of social life”.

Prepolitical suppression effects the depoliticization of norms that might challenge the center of U.S. politics, 
because it transforms prospective dissent or divergence from mainstream ideas into nonpolitical, personal, or illegitimate wants 
and needs. It occurs before discontent or frustration can organize into substantive political power. In prepolitical 
suppression, potentially oppositional ideas become invisible as political ideas, and potentially dissenting groups become 
invisible as political groups. Instead, their claims are culturally deciphered as personal desires, family concerns, criminal 
behavior, or medical challenges. Although Rogin only makes brief explicit mention of prepolitical suppression in Ronald Reagan, 
The Movie, the book that brought his work to a national audience, I find that this concept is central to Rogin's diagnoses of 
American politics—and it should be central to any scholarly work invested in defining the political.

Prepolitical suppression, I argue, helps to stake boundaries between the public and the private, the citizen and the individual,
the state and the fam-ily, the people and the psyche. It is involved in constructing the political. It operates distinct from 
traditional institutional power structures, in part because it often turns "conflicts of interest into problems of personal and social 
adjustment." Through cultural representations and norms that priva-tize, criminalize, medicate, or individualize budding oppositional 
ideas, prepolitical suppression makes the very concept of political antagonism seem nonpolitical. It even works within some of the 
most cherished norms in U.S. politics, including both liberal individualism, which locates the practice of freedom in private and economic
choice, and consensus. Consensus takes opposition and conflict out of political decision making by naming them violent and unproductive
behaviors; if the goal of politics is the agreement of all people, then antagonism is delegitimized and framed as the product of unruly
personal anger rather than an action fundamental to participatory, democratic politics.
`;

    // Create a Blob object with the content
    const file = new Blob([content], { type: "text/plain" });

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = "webpage-content.txt"; // Default file name

    // Simulate a click on the anchor element
    link.click();

    // Clean up by revoking the object URL
    URL.revokeObjectURL(link.href);
});

