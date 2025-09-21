//import { useEffect } from 'react';  // This is not been used and the warning made my code test to fail
import { useMonitoringWithRoutes } from '../hooks/useMonitoring';

const RouteTracker = () => {
  // This component uses the route-aware monitoring hook
  useMonitoringWithRoutes();
  
  return null; // This component doesn't render anything
};

export default RouteTracker;


