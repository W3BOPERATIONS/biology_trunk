import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { mockPurchaseHistory } from '../../../data/dashboardMockData';

const PurchaseHistorySection = () => {
  const handleDownloadInvoice = (purchase) => {
    console.log('Downloading invoice:', purchase?.id);
    alert(`Invoice ${purchase?.id} download started!`);
  };

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'failed':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const totalSpent = mockPurchaseHistory?.reduce((sum, purchase) => sum + purchase?.amount, 0);

  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-foreground">Purchase History</h2>
          <p className="text-sm text-text-secondary mt-1">
            {mockPurchaseHistory?.length} transaction{mockPurchaseHistory?.length !== 1 ? 's' : ''}
          </p>
        </div>
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg px-4 py-2">
          <p className="text-xs text-text-secondary">Total Spent</p>
          <p className="text-2xl font-bold text-foreground">${totalSpent?.toFixed(2)}</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                Purchase ID
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                Course
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                Date
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                Amount
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                Payment Method
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                Status
              </th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-foreground">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {mockPurchaseHistory?.map((purchase) => (
              <tr
                key={purchase?.id}
                className="border-b border-border hover:bg-muted transition-colors"
              >
                <td className="py-4 px-4">
                  <span className="text-sm font-mono text-foreground">
                    {purchase?.id}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <p className="text-sm font-medium text-foreground line-clamp-2">
                    {purchase?.courseTitle}
                  </p>
                </td>
                <td className="py-4 px-4">
                  <span className="text-sm text-text-secondary">
                    {formatDate(purchase?.purchaseDate)}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-sm font-semibold text-foreground">
                    ${purchase?.amount?.toFixed(2)}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <Icon
                      name={purchase?.paymentMethod === 'Credit Card' ? 'CreditCard' : 'Wallet'}
                      size={16}
                      className="text-text-secondary"
                    />
                    <span className="text-sm text-text-secondary">
                      {purchase?.paymentMethod}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(purchase?.status)}`}>
                    {purchase?.status?.charAt(0)?.toUpperCase() + purchase?.status?.slice(1)}
                  </span>
                </td>
                <td className="py-4 px-4 text-right">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDownloadInvoice(purchase)}
                    iconName="Download"
                    iconPosition="left"
                  >
                    Invoice
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-muted rounded-lg">
        <div className="flex items-center space-x-3">
          <Icon name="Info" size={20} className="text-primary" />
          <p className="text-sm text-text-secondary">
            Need help with a purchase? Contact our support team.
          </p>
        </div>
        <Button variant="outline">
          Contact Support
        </Button>
      </div>
    </div>
  );
};

export default PurchaseHistorySection;