import { sampleMeditations, Meditation } from '@/app/lib/sample_meditations';
import { lusitana } from '@/app/ui/fonts';

export default async function MeditationList() {
    return (
        <div className="w-full md:col-span-5">
        <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Meditation Sessions
        </h2>
        <div className="rounded-xl bg-gray-50 p-4">
          <div className="grid grid-cols-1 gap-4">
            {sampleMeditations.map((meditation: Meditation) => (
              <div key={meditation.id} className="bg-white p-4 rounded-md shadow">
                <h3 className="text-lg font-semibold">{meditation.title}</h3>
                <p className="text-gray-600">{meditation.description}</p>
                <p className="text-sm text-gray-500">Duration: {meditation.duration}</p>
                {/* Test the audio with a direct link */}
                <audio controls className="mt-2 w-full">
                  <source src={process.env.NODE_ENV === 'development' ? `http://localhost:3000${meditation.audioUrl}` : meditation.audioUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };