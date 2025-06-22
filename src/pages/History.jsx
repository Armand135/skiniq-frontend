import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const History = () => {
  const [scans, setScans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScans = async () => {
      const { data, error: userError } = await supabase.auth.getUser();
      const user = data?.user;
      if (!user) {
        console.error("No user logged in.");
        setLoading(false);
        return;
      }

      const { data: scansData, error } = await supabase
        .from('scans')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Error fetching scans:", error);
      }

      setScans(scansData || []);
      setLoading(false);
    };

    fetchScans();
  }, []);

  if (loading) return <p>Loading scan history...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Your Scan History</h2>
      {scans.length === 0 ? (
        <p>No scans yet. Try scanning your skin first.</p>
      ) : (
        <ul>
          {scans.map(scan => (
            <li key={scan.id}>
              <strong>{scan.condition}</strong> – {Math.round(scan.confidence * 100)}% –{' '}
              {new Date(scan.created_at).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
