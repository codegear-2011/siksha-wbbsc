import { ClassItem, Subject, Quiz, QuizResultData } from '../types';
import { INITIAL_CLASSES, INITIAL_SUBJECTS, INITIAL_QUIZZES } from '../data/initialData';

const STORAGE_KEYS = {
  CLASSES: 'safal_wb_classes_v1',
  SUBJECTS: 'safal_wb_subjects_v1',
  QUIZZES: 'safal_wb_quizzes_v1',
  ATTEMPTS: 'safal_wb_attempts_v1',
  ADMIN_AUTH: 'safal_wb_admin_auth_v1',
  ADMIN_USER: 'safal_wb_admin_user_v1',
  ADMIN_PASS: 'safal_wb_admin_pass_v1'
};

export const storageService = {
  // Initialize storage if empty
  initStorage(): void {
    if (!localStorage.getItem(STORAGE_KEYS.CLASSES)) {
      localStorage.setItem(STORAGE_KEYS.CLASSES, JSON.stringify(INITIAL_CLASSES));
    }
    if (!localStorage.getItem(STORAGE_KEYS.SUBJECTS)) {
      localStorage.setItem(STORAGE_KEYS.SUBJECTS, JSON.stringify(INITIAL_SUBJECTS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.QUIZZES)) {
      localStorage.setItem(STORAGE_KEYS.QUIZZES, JSON.stringify(INITIAL_QUIZZES));
    }
    if (!localStorage.getItem(STORAGE_KEYS.ADMIN_USER)) {
      localStorage.setItem(STORAGE_KEYS.ADMIN_USER, 'admin'); // Default admin username
    }
    if (!localStorage.getItem(STORAGE_KEYS.ADMIN_PASS)) {
      localStorage.setItem(STORAGE_KEYS.ADMIN_PASS, 'admin123'); // Default admin pin/pass
    }
  },

  // Classes
  getClasses(): ClassItem[] {
    this.initStorage();
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CLASSES);
      return data ? JSON.parse(data) : INITIAL_CLASSES;
    } catch {
      return INITIAL_CLASSES;
    }
  },

  addClass(newClass: ClassItem): ClassItem[] {
    const classes = this.getClasses();
    const updated = [...classes, newClass];
    localStorage.setItem(STORAGE_KEYS.CLASSES, JSON.stringify(updated));
    return updated;
  },

  // Subjects
  getSubjects(): Subject[] {
    this.initStorage();
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SUBJECTS);
      return data ? JSON.parse(data) : INITIAL_SUBJECTS;
    } catch {
      return INITIAL_SUBJECTS;
    }
  },

  addSubject(newSubject: Subject): Subject[] {
    const subjects = this.getSubjects();
    const updated = [...subjects, newSubject];
    localStorage.setItem(STORAGE_KEYS.SUBJECTS, JSON.stringify(updated));
    return updated;
  },

  // Quizzes
  getQuizzes(): Quiz[] {
    this.initStorage();
    try {
      const data = localStorage.getItem(STORAGE_KEYS.QUIZZES);
      return data ? JSON.parse(data) : INITIAL_QUIZZES;
    } catch {
      return INITIAL_QUIZZES;
    }
  },

  getQuizzesByClassAndSubject(classId: string, subjectId: string): Quiz[] {
    const all = this.getQuizzes();
    return all.filter(q => q.classId === classId && q.subjectId === subjectId);
  },

  getQuizById(quizId: string): Quiz | undefined {
    const all = this.getQuizzes();
    return all.find(q => q.id === quizId);
  },

  saveQuiz(quiz: Quiz): Quiz[] {
    const quizzes = this.getQuizzes();
    const existingIndex = quizzes.findIndex(q => q.id === quiz.id);
    let updated: Quiz[];
    if (existingIndex >= 0) {
      updated = [...quizzes];
      updated[existingIndex] = quiz;
    } else {
      updated = [quiz, ...quizzes];
    }
    localStorage.setItem(STORAGE_KEYS.QUIZZES, JSON.stringify(updated));
    return updated;
  },

  deleteQuiz(quizId: string): Quiz[] {
    const quizzes = this.getQuizzes();
    const updated = quizzes.filter(q => q.id !== quizId);
    localStorage.setItem(STORAGE_KEYS.QUIZZES, JSON.stringify(updated));
    return updated;
  },

  // Factory reset to seed initial data
  resetToDefaultData(): void {
    localStorage.setItem(STORAGE_KEYS.CLASSES, JSON.stringify(INITIAL_CLASSES));
    localStorage.setItem(STORAGE_KEYS.SUBJECTS, JSON.stringify(INITIAL_SUBJECTS));
    localStorage.setItem(STORAGE_KEYS.QUIZZES, JSON.stringify(INITIAL_QUIZZES));
  },

  // Attempts
  saveAttempt(result: QuizResultData): QuizResultData {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ATTEMPTS);
      const attempts: QuizResultData[] = data ? JSON.parse(data) : [];
      const enhancedResult: QuizResultData = {
        ...result,
        id: result.id || `att-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        timestamp: result.timestamp || new Date().toISOString(),
        percentage: result.totalQuestions > 0 ? Math.round((result.correctCount / result.totalQuestions) * 100) : 0
      };
      attempts.unshift(enhancedResult);
      localStorage.setItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(attempts.slice(0, 200)));
      return enhancedResult;
    } catch (e) {
      console.error('Error saving attempt', e);
      return result;
    }
  },

  saveOrUpdateStudentScore(result: QuizResultData, studentName: string): QuizResultData {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ATTEMPTS);
      const attempts: QuizResultData[] = data ? JSON.parse(data) : [];
      
      const targetId = result.id;
      let foundIndex = -1;
      if (targetId) {
        foundIndex = attempts.findIndex(a => a.id === targetId);
      } else {
        foundIndex = attempts.findIndex(a => a.quizId === result.quizId && a.score === result.score && !a.studentName);
      }

      const updatedResult: QuizResultData = {
        ...result,
        id: targetId || `att-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        studentName: studentName.trim(),
        timestamp: result.timestamp || new Date().toISOString(),
        percentage: result.totalQuestions > 0 ? Math.round((result.correctCount / result.totalQuestions) * 100) : 0
      };

      if (foundIndex >= 0) {
        attempts[foundIndex] = updatedResult;
      } else {
        attempts.unshift(updatedResult);
      }

      localStorage.setItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(attempts.slice(0, 200)));
      return updatedResult;
    } catch (e) {
      console.error('Error saving student score:', e);
      return result;
    }
  },

  deleteAttempt(attemptId: string): QuizResultData[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ATTEMPTS);
      const attempts: QuizResultData[] = data ? JSON.parse(data) : [];
      const updated = attempts.filter(a => a.id !== attemptId);
      localStorage.setItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(updated));
      return updated;
    } catch {
      return [];
    }
  },

  clearAllAttempts(): void {
    localStorage.removeItem(STORAGE_KEYS.ATTEMPTS);
  },

  getAttempts(): QuizResultData[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ATTEMPTS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  // Admin Auth
  verifyAdminCredentials(user: string, pin: string): boolean {
    const savedUser = localStorage.getItem(STORAGE_KEYS.ADMIN_USER) || 'admin';
    const savedPass = localStorage.getItem(STORAGE_KEYS.ADMIN_PASS) || 'admin123';
    return user.trim() === savedUser && pin.trim() === savedPass;
  },

  setAdminCredentials(newUser: string, newPin: string): void {
    if (newUser.trim()) localStorage.setItem(STORAGE_KEYS.ADMIN_USER, newUser.trim());
    if (newPin.trim()) localStorage.setItem(STORAGE_KEYS.ADMIN_PASS, newPin.trim());
  },

  getAdminCredentials(): { username: string; pin: string } {
    return {
      username: localStorage.getItem(STORAGE_KEYS.ADMIN_USER) || 'admin',
      pin: localStorage.getItem(STORAGE_KEYS.ADMIN_PASS) || 'admin123',
    };
  },

  verifyAdminPassword(password: string): boolean {
    const saved = localStorage.getItem(STORAGE_KEYS.ADMIN_PASS) || 'admin123';
    return password === saved;
  },

  setAdminPassword(newPass: string): void {
    localStorage.setItem(STORAGE_KEYS.ADMIN_PASS, newPass);
  },

  isAdminLoggedIn(): boolean {
    return localStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true';
  },

  setAdminLoggedIn(status: boolean): void {
    localStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, status ? 'true' : 'false');
  }
};
