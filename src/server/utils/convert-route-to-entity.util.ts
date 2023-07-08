const mapping: Record<string, string> = {
  clients: 'client',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
