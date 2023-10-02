'use client';

import { FormEvent, useState } from 'react';

const isValidAmazonProductURL = (url: string) => {
  try {
    const parseURL = new URL(url);
    const hostName = parseURL.hostname;
    if (
      hostName.includes(
        'amazon.com' ||
          hostName.includes('amazon.') ||
          hostName.includes('amazon')
      )
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }
};

function SearchBar() {
  const [searchPrompt, setSearchPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonProductURL(searchPrompt);

    if (!isValidLink) return alert('Please provide valid amazon link!');

    try {
      setIsLoading(true);
      
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        type="text"
        placeholder="Enter product link"
        className="searchbar-input"
      />
      <button
        type="submit"
        className="searchbar-btn"
        disabled={searchPrompt === ''}
      >
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
}

export default SearchBar;
