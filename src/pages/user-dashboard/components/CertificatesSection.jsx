import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { mockCertificates } from '../../../data/dashboardMockData';

const CertificatesSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleDownload = (certificate) => {
    console.log('Downloading certificate:', certificate?.id);
    alert(`Certificate ${certificate?.id} download started!`);
  };

  const handleShare = (certificate) => {
    console.log('Sharing certificate:', certificate?.id);
    alert(`Share certificate: ${certificate?.verificationUrl}`);
  };

  const handleVerify = (certificate) => {
    window.open(certificate?.verificationUrl, '_blank');
  };

  const handlePreview = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <>
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-foreground">My Certificates</h2>
            <p className="text-sm text-text-secondary mt-1">
              {mockCertificates?.length} certificate{mockCertificates?.length !== 1 ? 's' : ''} earned
            </p>
          </div>
          <Button
            variant="default"
            onClick={() => alert('Downloading all certificates...')}
            iconName="Download"
            iconPosition="left"
          >
            Download All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCertificates?.map((certificate) => (
            <div
              key={certificate?.id}
              className="bg-muted rounded-lg overflow-hidden hover:shadow-lg transition-all border border-transparent hover:border-primary/20 group"
            >
              <div
                onClick={() => handlePreview(certificate)}
                className="relative cursor-pointer"
              >
                <img
                  src={certificate?.thumbnail}
                  alt={certificate?.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                  <div className="bg-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon name="Eye" size={20} className="text-primary" />
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <div className="bg-green-500 rounded-full p-2">
                    <Icon name="Award" size={16} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                  {certificate?.courseTitle}
                </h3>
                
                <p className="text-sm text-text-secondary mb-1">
                  By {certificate?.instructor}
                </p>

                <div className="flex items-center space-x-2 text-sm text-text-secondary mb-4">
                  <Icon name="Calendar" size={14} />
                  <span>Issued {formatDate(certificate?.issueDate)}</span>
                </div>

                <div className="bg-background rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-secondary">Certificate ID</span>
                    <button
                      onClick={() => handleVerify(certificate)}
                      className="text-xs text-primary hover:underline font-medium"
                    >
                      Verify
                    </button>
                  </div>
                  <p className="text-sm font-mono font-semibold text-foreground mt-1">
                    {certificate?.id}
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleDownload(certificate)}
                    iconName="Download"
                    iconPosition="left"
                  >
                    Download
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare(certificate)}
                  >
                    <Icon name="Share2" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e?.stopPropagation()}
          >
            <div className="p-6 border-b border-border flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {selectedCertificate?.courseTitle}
                </h3>
                <p className="text-sm text-text-secondary mt-1">
                  Certificate ID: {selectedCertificate?.id}
                </p>
              </div>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="text-text-secondary hover:text-foreground"
              >
                <Icon name="X" size={24} />
              </button>
            </div>

            <div className="p-6">
              <img
                src={selectedCertificate?.thumbnail}
                alt={selectedCertificate?.alt}
                className="w-full rounded-lg"
              />

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  variant="default"
                  onClick={() => handleDownload(selectedCertificate)}
                  iconName="Download"
                  iconPosition="left"
                >
                  Download PDF
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleShare(selectedCertificate)}
                  iconName="Share2"
                  iconPosition="left"
                >
                  Share Certificate
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleVerify(selectedCertificate)}
                  iconName="CheckCircle"
                  iconPosition="left"
                >
                  Verify Online
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificatesSection;