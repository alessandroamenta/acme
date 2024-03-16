export interface Meditation {
    id: number;
    title: string;
    description: string;
    duration: string;
    audioUrl: string;
}

export const sampleMeditations: Meditation[] = [
    {
        id: 1,
        title: "Morning Meditation",
        description: "A calming start to your day.",
        duration: "10 minutes",
        audioUrl: "/meditations/session1.mp3"
    },
    {
        id: 2,
        title: "Stress Relief",
        description: "Release the tension of the day.",
        duration: "15 minutes",
        audioUrl: "/meditations/session1.mp3"
    },
    {
        id: 3,
        title: "Mindfullness Meditation",
        description: "A calming start to your day.",
        duration: "10 minutes",
        audioUrl: "/meditations/session1.mp3"
    },
    {
        id: 4,
        title: "Pain Relief",
        description: "Release the tension of the day.",
        duration: "15 minutes",
        audioUrl: "/meditations/session1.mp3"
    },
    // ... more meditations
];
