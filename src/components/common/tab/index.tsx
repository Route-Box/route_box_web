import React, { useState, useTransition, Suspense, useRef } from 'react';
import './tab.css';
import Typography from '../Typography';

interface TabProps {
  tabs: {
    id: string;
    label: string;
    content: React.ReactNode;
  }[];
  defaultTabId?: string;
}

export const Tab: React.FC<TabProps> = ({ tabs, defaultTabId }) => {
  const [activeTabId, setActiveTabId] = useState(defaultTabId || tabs[0]?.id || '');
  const [activeTabIndicator, setActiveTabIndicator] = useState(0);
  const [isPending, startTransition] = useTransition();
  const contentRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (tabId: string) => {
    const newIndex = tabs.findIndex((tab) => tab.id === tabId);
    setActiveTabIndicator(newIndex);
    startTransition(() => {
      setActiveTabId(tabId);
    });
  };

  const activeTab = tabs.find((tab) => tab.id === activeTabId);

  return (
    <div className="tab-container">
      <div className="tab-header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTabId === tab.id ? 'active' : ''} ${isPending ? 'pending' : ''}`}
            onClick={() => handleTabChange(tab.id)}
            disabled={isPending}
          >
            <Typography variant="Body_R_S">{tab.label}</Typography>
          </button>
        ))}
        <div
          className="tab-indicator"
          style={{
            width: `${100 / tabs.length}%`,
            transform: `translateX(${activeTabIndicator * 100}%)`,
          }}
        />
      </div>
      <div className="tab-content-container">
        <div className="tab-content" ref={contentRef}>
          <Suspense fallback={<div className="tab-loading">로딩 중...</div>}>
            {activeTab?.content}
          </Suspense>
        </div>
      </div>
    </div>
  );
};
