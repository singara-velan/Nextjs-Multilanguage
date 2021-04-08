import { useRouter } from "next/router";
import useSWR from "swr";

const Home = () => {
  const router = useRouter();
  const locale = router.locale;

  const { data, error } = useSWR(`/locales/${locale}.json`, fetcher);

  const handleChange = (event) => {
    const selectedLocale = event.target.value;
    if (selectedLocale !== locale) {
      router.push("/home", "/home", { locale: selectedLocale });
    }
  };

  return (
    <>
      <header>
        <nav className={`navbar navbar-expand navbar-light bg-info p-3 mb-2`}>
          <div className="container justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item mr-2">
                {" "}
                <span className="text-white">Change language</span>
              </li>
              <li className="nav-item dropdown d-inline-flex ml-2 mr-2">
                <select value={locale} onChange={handleChange}>
                  <option value="en-us">English</option>
                  <option value="ta-in">Tamil</option>
                  <option value="hi-in">Hindi</option>
                  <option value="kn-in">Kannada</option>
                </select>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="container">
        <div className="card bg-light">
          <div className="card-body">
            <h1 className="text-center">
              <mark>{data?.language}</mark>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default Home;
