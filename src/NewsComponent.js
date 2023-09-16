import React, { useEffect, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

function NewsComponent() {
  const [articles, setArticles] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('general');

  const categories = [
    { name: "general", emoji: "🤷‍♂️" },
    { name: "business", emoji: "🤝" },
    { name: "entertainment", emoji: "🎬" },
    { name: "health", emoji: "🩺" },
    { name: "science", emoji: "🧬" },
    { name: "sports", emoji: "🏅" },
    { name: "technology", emoji: "👨‍💻" }
  ];
  
  
  useEffect(() => {
    const url = `http://127.0.0.1:5000/category/${selectedCategory}`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (data.status === 'ok') {
                setArticles(data.articles); 
            } else {
                console.log(data.status);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, [selectedCategory]);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const searchUrl = `http://127.0.0.1:5000/search/${searchInput}`;
        fetch(searchUrl)
          .then((response) => response.json())
          .then((data) => {
            if (data.status === 'ok') {
              setArticles(data.articles);
            } else {
              console.log(data.status);
            }
          })
          .catch((error) => {
            console.error('Error:', error);
        });
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="bg-white">
            <div className="flex flex-col justify-center items-center lg:py-10 lg:gap-8 gap-4">

                <h1 className="md:text-[3rem] text-3xl md:font-thin text-gray-700 px-4 pt-6">What's on the news?</h1>
                <div className="px-4 w-full max-w-lg mx-auto">
                    <form onSubmit={handleSearchSubmit} className="w-full border border-gray-300 rounded py-2.5 px-4 flex justify-between">
                        <input
                            className="lg:text-xl text-lg w-full outline-none text-gray-600"
                            type="text"
                            placeholder="Search by keyword"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <button type="submit" className="">
                            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 stroke-2" />
                        </button>
                    </form>
                </div>

                <div className="max-w-6xl mx-auto w-full">
                    <ul className="flex items-center lg:justify-center overflow-scroll p-4 lg:gap-4 gap-2 text-blue-600">
                        {categories.map((item, index) => (
                            <li key={index} className="group">
                                <button
                                onClick={() => handleCategoryClick(item.name)}
                                className={`border ${selectedCategory === item.name ? 'text-white bg-blue-600' : 'border-blue-200'} px-5 py-2 flex items-center gap-2 rounded-full text-sm font-semibold group-hover:border-blue-400 capitalize`}
                                >
                                    <span className="text-lg">{item.emoji} </span> {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
            <ul className="grid lg:grid-cols-3 md:grid-cols-2 p-4 gap-10 md:gap-8 w-full max-w-6xl mx-auto">
            {articles.map((article, index) => (
                <li key={index} className="">
                    <a className="group" href={article.url} target="_blank" rel="noopener noreferrer">
                        <img className="w-full h-52 shadow-md bg-cover bg-center" src={article.urlToImage} alt="pic" />
                        <h2 className="font-semibold pt-2.5">{article.title}</h2>
                        {/* <p>{article.description}</p> */}
                        <div className="text-gray-400 text-sm flex gap-2 divide-x pt-1.5">
                            <p className="font-semibold">{article.source.name}</p>
                            <p className="pl-2">By {article.author}</p>
                        </div>
                    </a>
                </li>
            ))}
            </ul>
        </div>
    );
}

export default NewsComponent;
