import { skeleton } from '../../utils';
import { SanitizedLanguage } from '../../interfaces/sanitized-config';

const LanguageCard = ({
  loading,
  languages,
}: {
  loading: boolean;
  languages: SanitizedLanguage[];
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 3; index++) {
      array.push(
        <div key={index} className="flex justify-between items-center py-2">
          {skeleton({ widthCls: 'w-20', heightCls: 'h-4' })}
          {skeleton({ widthCls: 'w-16', heightCls: 'h-4' })}
        </div>,
      );
    }

    return array;
  };

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'nativo':
      case 'native':
        return 'badge-success';
      case 'avanzado':
      case 'advanced':
        return 'badge-info';
      case 'intermedio':
      case 'intermediate':
        return 'badge-warning';
      case 'básico':
      case 'basic':
        return 'badge-error';
      default:
        return 'badge-neutral';
    }
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Idiomas</span>
            )}
          </h5>
        </div>
        <div className="p-3">
          <div className="space-y-2">
            {loading
              ? renderSkeleton()
              : languages.map((language, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-1"
                  >
                    <span className="text-base-content font-medium">
                      {language.name}
                    </span>
                    <span
                      className={`badge ${getLevelColor(
                        language.level,
                      )} badge-sm text-xs`}
                    >
                      {language.level}
                    </span>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageCard;
