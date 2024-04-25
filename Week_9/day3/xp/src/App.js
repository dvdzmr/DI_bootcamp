// import logo from './logo.svg';
import './App.css';
import BuggyCounter from './component/Buggycounter'
import Color from './component/Color';
import ErrorBoundary from './component/ErrorBoundary';

export default function App() {
  return (
    <div>
      <Color/>
    
      <hr />
      <ErrorBoundary>
        <p>If one crashes, the error boundary replaces both of them.</p>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <p>If one crashes, the other isn't affected.</p>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>
    </div>
  );
}
