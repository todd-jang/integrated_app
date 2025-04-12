#LangGraph UI가 로딩 중일 때 표시하는 컴포넌트입니다.
const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin h-16 w-16 border-4 border-blue-500 border-t-transparent rounded-full"></div>
    </div>
  );
};

export default Loader;  
