// components/Alert.js
import { AlertCircle, CheckCircle, Info, XCircle, X } from 'lucide-react';

export default function Alert({ type = 'info', title, message, onClose }) {
  const types = {
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-800',
      icon: CheckCircle,
      iconColor: 'text-green-500',
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-800',
      icon: XCircle,
      iconColor: 'text-red-500',
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      text: 'text-yellow-800',
      icon: AlertCircle,
      iconColor: 'text-yellow-500',
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
      icon: Info,
      iconColor: 'text-blue-500',
    },
  };

  const config = types[type] || types.info;
  const Icon = config.icon;

  return (
    <div className={`${config.bg} ${config.border} border rounded-lg p-4 animate-fade-in`}>
      <div className="flex items-start">
        <Icon className={`${config.iconColor} flex-shrink-0 mt-0.5`} size={20} />
        <div className="ml-3 flex-1">
          {title && (
            <h3 className={`${config.text} font-medium text-sm mb-1`}>
              {title}
            </h3>
          )}
          {message && (
            <p className={`${config.text} text-sm`}>
              {message}
            </p>
          )}
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className={`${config.text} ml-3 flex-shrink-0 hover:opacity-75 transition-opacity`}
          >
            <X size={18} />
          </button>
        )}
      </div>
    </div>
  );
}