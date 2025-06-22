import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const History = () => {
  const [scans, setScans] = useState([]);

  useEffect(() => {
    const fetchScans = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      const { data, error } = await supabase
        .from('scans')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      setScans(data || []);
    };
    fetchScans();
  }, []);

  return (
    <div>
      <h2>Your Scan History</h2>
      <ul>
        {scans.map(scan => (
          <li key={scan.id}>
            {scan.condition} - {Math.round(scan.confidence * 100)}% - {new Date(scan.created_at).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
